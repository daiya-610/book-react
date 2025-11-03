import { useState } from "react";

export default function FormTextarea() {
  // Stateを初期化
  const [form, setForm] = useState({
    comment: "さまざまなフォーム要素",
  });
  // テキストエリアの変更時に入力値をStateに反映
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // [送信]ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`コメント：${form.comment}`);
  };

  return (
    <form>
      <label htmlFor="comment">コメント：</label>
      <br />
      <textarea
        id="comment"
        name="comment"
        cols="30"
        rows="7"
        value={form.comment}
        onChange={handleForm}
      ></textarea>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
