import { useState } from "react";

export default function EventOnce() {
  // クリック済みかどうかを管理するためのフラグ
  const [clicked, setClicked] = useState(false);

  // 今日の運勢(点数)
  const [result, setResult] = useState(0);
  const [text, setText] = useState("");
  const handleClick = (e) => {
    // 未クリックの場合のみ運勢を算出
    if (!clicked) {
      setResult(Math.floor(Math.random() * 100 + 1));
      setText("今日の運勢は");
      setClicked(true);
    } else {
      setText("既に表示されました。");
    }
  };

  return (
    <>
      <button onClick={handleClick}>結果表示</button>
      <p>
        {text}
        {result}点
      </p>
    </>
  );
}
