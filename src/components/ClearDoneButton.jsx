import React from "react";
import "../css/ClearDoneButton.css";

function ClearDoneButton({ setItems }) {
  const handleClick = () => {
    setItems((items) => items.filter((item) => !item.isDone));
  };

  return (
    <button onClick={handleClick} className="btn">
      Clear
    </button>
  );
}

export default ClearDoneButton;
