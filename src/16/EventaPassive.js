import "./EventPassive.css";

export default function EventPassive() {
  const handleWheel = (e) => e.preventDefault();
  return (
    <div className="box" onWheel={handleWheel}>
      wheelイベントをハンドラーで...
    </div>
  );
}
