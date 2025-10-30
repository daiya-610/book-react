import React from "react";
// childrenに対してパラメーターを引き渡す
export default function ListTemplate({ src, render }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{render(elem)}</React.Fragment>
      ))}
    </dl>
  );
}
