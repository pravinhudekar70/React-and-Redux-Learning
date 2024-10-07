import React from "react";
import Heading from "./components/Heading";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Container from "./components/Container";

function App() {
  let foodList = [
    "Dal",
    "Green Vegitables",
    "Fruits",
    "salad",
    "Milk",
    "Roti",
    "Ghee",
  ];
  //  item = [];
  // if (item.length === 0) return <h1> I am Still hungry</h1>;

  return (
    <>
      <Container>
        <Heading />
        <ErrorMessage foodList={foodList} />
        <FoodItems foodList={foodList} />
      </Container>
      <Container>
        <p>above list contains the healthy food list</p>
      </Container>
    </>
  );
}

// short form of react fragment is <> </>
export default App;
