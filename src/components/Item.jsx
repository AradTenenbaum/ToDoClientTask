import React from "react";
import "../css/Item.css";
import { dateFormat } from "../utils/format";
import { setTaskCompletion } from "../api/tasks";

function Item({ text, isDone, timestamp, setItems, id }) {
  const handleChange = async () => {
    const result = await setTaskCompletion(id);
    if (!result.error) {
      setItems((items) => {
        const newItems = [...items];
        newItems[id].isDone = !isDone;
        return newItems;
      });
    }
  };

  return (
    <div className="item-container">
      <div className="mission">{text}</div>
      <div>
        <div>{dateFormat(timestamp)}</div>
        <input
          onChange={handleChange}
          checked={isDone}
          className="check-box"
          type="checkbox"
        />
      </div>
    </div>
  );
}

export default Item;
