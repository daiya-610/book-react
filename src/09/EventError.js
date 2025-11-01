import { useState } from "react";
import noimage from "./image/noimage.webp";

export default function EventError({ src, alt }) {
  const [path, setPath] = useState(src);
  // 画像を読み込めない場合はエラー画像を表示
  const handleError = () => setPath(noimage);
  return (
    <img
      src={path}
      alt={alt}
      onError={handleError}
      style={{ width: "100px", height: "100px" }}
    />
  );
}
