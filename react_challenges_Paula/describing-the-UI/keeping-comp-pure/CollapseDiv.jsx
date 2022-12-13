import { useState } from "react";

const CollapseDiv = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="toggle">
      <button onClick={() => setOpen(!open)}>collapse</button>
      {open && children}
    </div>
  );
};

export default CollapseDiv;
