import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import ErrorMessage from "./components/ErrorMessage";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <>
      <div className="container text-center my-3 bg-warning-subtle">
        <AppName />
        <div className="todo-items">
          <ErrorMessage itemList={itemList} />
          <AddTodo itemList={itemList} setItemList={setItemList} />
          <TodoItems itemList={itemList} setItemList={setItemList} />
        </div>
      </div>
    </>
  );
}

export default App;
