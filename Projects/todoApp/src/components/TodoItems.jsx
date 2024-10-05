import React from "react";
import Item from "./Item";
export default function TodoItems({ setItemList, itemList }) {
  const handleOnDel = (event) => {
    setItemList((prevItemList) =>
      prevItemList.filter((item) => item.name !== event)
    );
    // console.log(event, "list");
  };
  return (
    itemList.length !== 0 && (
      <div>
        {/* {console.log(itemList)} */}
        {itemList.map((item) => (
          <Item
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
            handleOnDel={() => handleOnDel(item.name)}
          />
        ))}
      </div>
    )
  );
}
