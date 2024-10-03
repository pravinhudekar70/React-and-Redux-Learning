import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
      <div className="container text-center my-3 bg-warning-subtle">
        <AppName />

        <div className="todo-items">
          <AddTodo />
          <TodoItem todoName="Buy Milk" todoDate="4/08/2024" />
          <TodoItem todoName="Goto college" todoDate="4/08/2024" />
        </div>
      </div>
    </>
  );
}

export default App;
