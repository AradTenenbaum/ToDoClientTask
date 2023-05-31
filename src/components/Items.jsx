import React from "react";
import Item from "./Item";
import "../css/Items.css";

function Items({ items, setItems }) {
  return (
    <div className="items-container">
      {items.map((item, index) => (
        <Item
          key={index}
          id={index}
          setItems={setItems}
          text={item.text}
          isDone={item.isDone}
          timestamp={item.timestamp}
        />
      ))}
    </div>
  );
}

export default Items;
