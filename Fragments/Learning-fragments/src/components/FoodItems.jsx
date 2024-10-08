import React from "react";
import Items from "./Items";
import { useState } from "react";

export default function FoodItems({ foodList }) {
  const [active, setActive] = useState([]);
  const onBuyClick = (event, item) => {
    let temp = [...active, item];
    setActive(temp);
  };
  // if (foodList.length === 0) {
  //   setActive([]);
  // }
  return (
    <div>
      <ul className="list-group container">
        {foodList.map((item) => (
          <Items
            key={item}
            item={item}
            active={active}
            onBuyClick={onBuyClick}
          />
        ))}
      </ul>
    </div>
  );
}
