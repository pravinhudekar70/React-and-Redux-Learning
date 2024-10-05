import React from "react";
import { useState } from "react";

export default function AddTodo({ itemList, setItemList }) {
  const [todoName, setTodoName] = useState("Enter here todo work");
  const [todoDate, setTodoDate] = useState("");
  const handleOnAdd = () => {
    let item = {
      name: todoName,
      date: todoDate,
    };
    setItemList((itemList) => [...itemList, item]);
    setTodoName("Enter here todo work");
    setTodoDate("");
    // console.log(itemList);
  };
  const handleOnChaneName = (event) => {
    setTodoName(event.target.value);
  };
  const handleOnChaneDate = (event) => {
    setTodoDate(event.target.value);
  };
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-6 ">
          <input type="text" value={todoName} onChange={handleOnChaneName} />
        </div>
        <div className="col-4 ">
          <input type="date" value={todoDate} onChange={handleOnChaneDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success "
            onClick={handleOnAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
