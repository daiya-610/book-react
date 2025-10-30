import { useState } from "react";

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);
  // [カウント] ボタンでカウントアップ
  const handleClick = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリック</p>
    </>
  );
}
