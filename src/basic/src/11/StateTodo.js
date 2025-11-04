// 配列型のStateに関しても、オブジェクト型と同じ理由で直接更新することができない。
/**
 * 操作            | 利用すべき（不変更新）             | 避けるべき（ミューテート）
 * 追加            | concat, [...list, newItem]          | push, unshift
 * 削除            | filter, [...list.slice(0, i), ...list.slice(i+1)] | splice, list[i] = …
 * 変換（変形）     | map                                   | for-ループ 内で list[i] を直接変更
 * 並び替え（ソート）| [...list].sort(), [...list].reverse() | sort(), reverse()
 */

import { useState } from "react";

// Todo項目idの最大値（登録都度にインクリメント）
let maxId = 0;
export default function StateTodo() {
  // 入力値（title）、Todoリスト（todo）をStateで管理
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  // テキストボックスへの入力をStateに反映
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    // 新規のTodoを追加
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
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
