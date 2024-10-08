import React from "react";
import styles from "./Items.module.css";

export default function Items({ item, onBuyClick, active }) {
  return (
    <div>
      <li
        className={` ${styles.lists} ${active.includes(item) && "bg-success"} `}
      >
        {item}
        <button
          className={`${styles.btns} btn btn-info`}
          onClick={(event) => onBuyClick(event, item)}
        >
          Buy
        </button>
      </li>
    </div>
  );
}
