import React, { useState } from "react";
import TextBar from "../components/TextBar";
import AddButton from "../components/AddButton";
import Items from "../components/Items";
import AddBar from "../components/AddBar";

function Home() {
  const [items, setItems] = useState([
    { text: "shower", isDone: true, timestamp: new Date(Date.now()) },
    {
      text: "develop a todo list",
      isDone: false,
      timestamp: new Date(Date.now()),
    },
    { text: "make ravioli", isDone: false, timestamp: new Date(Date.now()) },
  ]);

  return (
    <div>
      <div>
        <AddBar setItems={setItems} />
        <Items items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default Home;
