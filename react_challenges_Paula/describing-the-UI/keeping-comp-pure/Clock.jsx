/// exercise 1 ///
//didn't add time as prop, if I pass as a date string : .getHours() not a function

import { useEffect, useState } from "react";

///exercise 2

export default function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  //const date = new Date();
  const hours = date.getHours();

  let classname;
  if (hours >= 0 && hours <= 6) {
    classname = "night";
  } else {
    classname = "day";
  }
  return (
    <div>
      {" "}
      {/*I added a div here to fix a 'Hidration error', but not sure why it works. need to check next docs*/}
      <h1 id="time" className={classname}>
        {`it's ${date.toLocaleTimeString()} now`}
      </h1>
    </div>
  );
}
