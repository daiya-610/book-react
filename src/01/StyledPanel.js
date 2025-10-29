export default function StyledPanel({ children }) {
  {
    /** { children }　実態はPropsの一部 */
  }
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        border: "1px solid #000",
        width: "fit-content",
        boxShadow: "10px 5px 5px #999",
        backgroundColor: "#fff",
      }}
    >
      {children} {/** コンテンツの置き場所を準備。<p>勉強スタート</p> */}
    </div>
  );
}
