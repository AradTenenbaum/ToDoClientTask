import React, { useEffect, useState } from "react";
import Items from "../components/Items";
import AddBar from "../components/AddBar";
import { getAllTasks, getUser } from "../api/tasks";

function Home() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const tasks = await getAllTasks();
    if (tasks && tasks.length > 0) {
      setItems(tasks);
    }
  };

  useEffect(() => {
    getUser();
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <AddBar setItems={setItems} />
        {items ? <Items items={items} setItems={setItems} /> : ""}
      </div>
    </div>
  );
}

export default Home;
