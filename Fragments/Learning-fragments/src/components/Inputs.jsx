import React from "react";

export default function Inputs({ text, setText, handleOnKeyDoun }) {
  return (
    <input
      className="inputFild"
      type="text"
      value={text}
      placeholder="Add new Food Item"
      onKeyDown={handleOnKeyDoun}
      onChange={(event) => {
        setText(event.target.value);
      }}
    />
  );
}
