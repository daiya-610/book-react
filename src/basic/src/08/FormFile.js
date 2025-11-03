// ファイル入力ボックスではアプリから値が設定されることはない。常に非制御コンポーネントとして実装する。
import { useRef } from "react";

export default function FormFile() {
  // ファイル入力ボックスへの参照 - 非制御コンポーネントでは対象の要素に対して参照を設定
  const file = useRef(null);

  // [送信]ボタンクリックでファイル情報をログ出力
  function show() {
    // Refオブジェクトからは、currentプロパティで目的の要素を取得できるので、そのfilesプロパティで指定されたファイル群（FileListオブジェクト）を取得している
    const fs = file.current.files;
    // 取得したファイル群を順に走査
    for (const f of fs) {
      /**
       * name: ファイル名
       * type: コンテンツタイプ
       * size: ファイルサイズ（単位はバイト）
       * lastModified: 最終更新日時（1970/01/01 00:00:00からの経過ミリ秒）
       */
      console.log(`ファイル名：${f.name}`);
      console.log(`種類：${f.type}`);
      console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);
      console.log(`最終更新日：${f.lastModified}`);
    }
  }

  return (
    <form>
      <input type="file" ref={file} multiple />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
