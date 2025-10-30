/** ListTemplate.js */
import books from "./03/books";
import ListTemplate from "./03/ListTemplate";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // render属性として描画関数を渡す
  <ListTemplate
    src={books}
    render={(elem) => {
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>;
    }}
  />
);
/** ListTemplate.js */

/** TitledPanel.js */
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import TitledPanel from "./02/TitledPanel";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <TitledPanel>
//     <p key="title">2025/10/29</p>
//     <p key="body">勉強スタート</p>
//   </TitledPanel>
// );
/** TitledPanel.js */

/** StyledPanel.js */
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import StyledPanel from "./01/StyledPanel";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StyledPanel>
//     <p>2025/10/29</p>
//     <p>勉強スタート</p>
//   </StyledPanel>
// );
/** StyledPanel.js */
