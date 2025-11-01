/** EventKey.js */
import EventKey from "./12/EventKey";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventKey />);
/** EventKey.js */

/** EventPoint.js */
// import EventPoint from "./11/EventPoint";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventPoint />);
/** EventPoint.js */

/** EventObj.js */
// import EventObj from "./10/EventObj";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventObj />);
/** EventObj.js */

/** EventError.js */
// import EventError from "./09/EventError";
// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventError src="./image/wings.jpg" alt="エラー画像" />);
/** EventError.js */

// /** EventCompare.js */
// import EventCompare from "./08/EventCompare";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventCompare />);
/** EventCompare.js */

/** EventMouse.js */
// import EventMouse from "./07/EventMouse";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <EventMouse
//     alt="ロゴ"
//     beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//     afterSrc="https://www.web-deli.com/image/home_chara.gif"
//   />
// );
/** EventMouse.js */

/** StateParent.js */
// import StateParent from "./06/StateParent";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateParent />);
/** StateParent.js */

/** StateBasic.js */
// import StateBasic from "./06/StateBasic";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateBasic init={0} />);
/** StateBasic.js */

/** TypeProp.js */
// import TypeProp, { Member } from "./05/TypeProp";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 正しい例 prop1
// <TypeProp prop1={new Member()} />
// 誤った例 prop1
// <TypeProp prop1="hoge" />
// 正しい例 prop2
// <TypeProp prop2="男性" />
// 誤った例 prop2
// <TypeProp prop2="hoge" />
// 正しい例 prop3
// <TypeProp prop3="山田太郎" />
// 誤った例 prop3
// <TypeProp prop3={new Member()} />
// 正しい例 prop4
// <TypeProp prop4={[15, 333]} />
// 誤った例 prop4
// <TypeProp prop4={["山田太郎", 333]} />
// 正しい例 prop5
// <TypeProp prop5={{ 山田太郎: 15, 山田花子: 30 }} />
// 誤った例 prop5
// <TypeProp prop5={{ 山田太郎: 15, 山田花子: "十三" }} />
// 正しい例 prop6
// <TypeProp prop6={{ name: "山田太郎", age: 15, sex: "男性" }} />
// 誤った例 prop6
//   <TypeProp prop6={{ name: "山田太郎", age: 15 }} />
// );
/** TypeProp.js */

/** MyHello.js */
// import MyHello from "./04/MyHello";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyHello />);
/** MyHello.js */

/** ListTemplate.js */
// import books from "./03/books";
// import ListTemplate from "./03/ListTemplate";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // render属性として描画関数を渡す
//   <ListTemplate
//     src={books}
//     render={(elem) => {
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title} ({elem.price}円)
//           </a>
//         </dt>
//         <dd>{elem.summary}</dd>
//       </>;
//     }}
//   />
// );
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
