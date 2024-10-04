import React from "react";
import Items from "./Items";

export default function FoodItems(props) {
  return (
    <div>
      <ul className="list-group container">
        {props.foodList.map((item) => (
          <Items key={item} item={item} />
        ))}
      </ul>
    </div>
  );
}
