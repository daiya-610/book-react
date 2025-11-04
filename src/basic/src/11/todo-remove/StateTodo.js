import { useState } from "react";
import "../todo-done/StateTodo.css";

let maxId = 0;
export default function StateTodo() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId, // id値
        title, // Todo本体
        created: new Date(), // 作成日時
        isDone: false, // 実行済みかどうか
      },
    ]);
  };

  // [済]ボタンでTodo項目を完了状態に
  const handleDone = (e) => {
    // todo配列を走査し、id値が等しいものを検索
    setTodo(
      todo.map((item) => {
        if (item.id === Number(e.target.dataset.id)) {
          return {
            ...item,
            isDone: true,
          };
        } else {
          return item;
        }
      })
    );
  };

  // [削除]ボタンで該当するTodo項目を破棄
  const handleRemove = (e) => {
    // 配列要素の削除には、filterメソッドを利用する。現在のid値(item.id)とdata-id属性(e.target.dataset.id)とが合致しない要素だけを残すことで、[削除]ボタンが押された項目だけを除去している。
    setTodo(todo.filter((item) => item.id !== Number(e.target.dataset.id)));
  };

  return (
    <div>
      <label>
        やること：
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      {/* Todoをリストに整形 */}
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              済
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
