export default function EventKey() {
  // Ctrl + qでヘルプメッセージを表示
  const handleKey = (e) => {
    if ((e.ctrlKey && e.key === "l") || (e.metaKey && e.key === "l")) {
      alert("名前は20モジ以内で入力してください。");
    }
  };

  return (
    <form>
      <label>
        名前：
        <input type="text" size="20" onKeyDown={handleKey} />
      </label>
    </form>
  );
}
