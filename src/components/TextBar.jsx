import React from "react";
import "../css/TextBar.css";

function TextBar({ text, name }) {
  return (
    <input
      name={name}
      type="text"
      className="text-bar"
      placeholder="Write down your todo..."
      value={text}
      autoComplete="off"
    />
  );
}

export default TextBar;
