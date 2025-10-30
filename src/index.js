/** ListTemplate.js */
import books from "./03/books.json";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListTemplate from "./03/ListTemplate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ListTemplate src={books}>
    {(elem) => {
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>;
    }}
  </ListTemplate>
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
