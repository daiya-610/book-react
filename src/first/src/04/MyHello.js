import PropTypes from "prop-types";

function MyHello(props) {
  return <div>{props.myName}さん</div>;
}

// 型情報を宣言
MyHello.propTypes = {
  // プロパティ名：型情報
  myName: PropTypes.string.isRequired, // プロパティが必須であること
};

export default MyHello;
