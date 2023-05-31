import React, { useState } from "react";
import TextBar from "./TextBar";
import AddButton from "./AddButton";
import { useForm } from "../hooks/useForm";
import ClearDoneButton from "./ClearDoneButton";

function AddBar({ setItems }) {
  const handleClick = () => {
    if (values.text != "") {
      setItems((items) => [
        ...items,
        { text: values.text, timestamp: new Date(Date.now()), isDone: false },
      ]);
      Clear();
    }
  };

  const { onChange, onSubmit, Clear, values } = useForm(handleClick, {
    text: "",
    timestamp: null,
  });

  return (
    <form onChange={onChange} onSubmit={onSubmit}>
      <ClearDoneButton setItems={setItems} />
      <TextBar text={values.text} name={"text"} />
      <AddButton />
    </form>
  );
}

export default AddBar;
