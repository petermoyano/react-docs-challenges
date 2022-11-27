import { useState } from "react";

export default function ColorSwitch() {
  const [color, setColor] = useState("black");

  const makeColor = () => Math.floor(Math.random() * 256);
  let randomColor = `rgb(${makeColor()},${makeColor()},${makeColor()})`;

  function onChangeColor(e) {
    e.stopPropagation();
    setColor(randomColor);
    document.body.style.backgroundColor = color;
  }
  return <button onClick={onChangeColor}>Change color</button>;
}
