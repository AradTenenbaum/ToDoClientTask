import React from "react";
import "../css/ClearDoneButton.css";
import { clearTasks } from "../api/tasks";

function ClearDoneButton({ setItems }) {
  const handleClick = async () => {
    const result = await clearTasks();
    if (!result.error) {
      setItems(result);
    }
  };

  return (
    <button onClick={handleClick} className="btn">
      Clear
    </button>
  );
}

export default ClearDoneButton;
