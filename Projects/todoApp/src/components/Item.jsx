import React from "react";

export default function TodoItem(props) {
  return (
    <div className="container my-3 ">
      <div className="row">
        <div className="col-6 ">{props.todoName}</div>
        <div className="col-4 ">{props.todoDate}</div>
        <div className="col-2">
          <button
            name={props.name}
            type="button"
            className="btn btn-danger"
            onClick={props.handleOnDel}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
