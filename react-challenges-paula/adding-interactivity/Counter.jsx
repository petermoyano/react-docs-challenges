import { Children, useState } from "react";
import ColorSwitch from "./ColorSwitch";

/// responding to events/ exercises 1,2 using eventHandlers and e.stopPropagation
///made a counter component and added as child the ColorSwitch, passing the handle as prop and then moving it to the color component

export default function Counter() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div onClick={updateCount} className={'counter-box'}> 
    
      {/* <button > add 1</button> */}
      <h2>{count}</h2>
      <ColorSwitch />
    </div>
  );
}

