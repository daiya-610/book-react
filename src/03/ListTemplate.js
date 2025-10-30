import React from "react";
// childrenに対してパラメーターを引き渡す
export default function ListTemplate({ src, children }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{children(elem)}</React.Fragment>
      ))}
    </dl>
  );
}
