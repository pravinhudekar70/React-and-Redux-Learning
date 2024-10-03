import React from "react";

export default function CurrentTimeDate() {
  let vel = new Date();
  return (
    <div className="text-center fs-4 text  my-2">
      This is the Current Date and Time: {vel.toLocaleDateString()} -
      {vel.toLocaleTimeString()}
    </div>
  );
}
