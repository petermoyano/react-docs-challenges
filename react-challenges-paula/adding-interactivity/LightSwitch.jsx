export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return (
    <div className="box">
      <button onClick={handleClick}>Toggle the lights</button>
    </div>
  );
}
