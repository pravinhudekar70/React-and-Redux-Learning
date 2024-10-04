import React from "react";

export default function ErrorMessage(props) {
  let message =
    props.foodList.length === 0 ? (
      <h1> No Item !, I am Still hungry </h1>
    ) : null;
  return message;
}
