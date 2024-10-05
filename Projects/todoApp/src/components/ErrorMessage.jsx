import React from "react";

export default function ErrorMessage({ itemList }) {
  return itemList.length === 0 ? (
    <h3> NO Task Add Yet Add New One.....</h3>
  ) : null;
}
