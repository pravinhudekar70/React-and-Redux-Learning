import React from "react";
import Heading from "./components/Heading";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./App.css";
import Container from "./components/Container";
import Inputs from "./components/Inputs";

function App() {
  // let foodList = ["Dal", "Green Vegitables", "Fruits", "salad"];
  //  item = [];
  // if (item.length === 0) return <h1> I am Still hungry</h1>;

  const [foodList, setFoodList] = useState([
    "Dal",
    "Green Vegitables",
    "Fruits",
    "salad",
  ]);
  const [text, setText] = useState("");
  const handleOnKeyDoun = (event) => {
    console.log(event);
    setText(event.target.value);
    if (event.code === "Enter") {
      setFoodList([...foodList, text]);
      setText("");
    }
  };
  return (
    <Container>
      <Heading />
      <ErrorMessage foodList={foodList} />
      <Inputs handleOnKeyDoun={handleOnKeyDoun} text={text} setText={setText} />
      <FoodItems foodList={foodList} />
      <button
        className="clearAll btn btn-danger my-3"
        type="button"
        onClick={() => {
          setFoodList([]);
          setText("");
        }}
      >
        Clear All
      </button>
    </Container>
  );
}

// short form of react fragment is <> </>
export default App;
