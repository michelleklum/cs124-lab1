import React, { Fragment } from "react";

function DeleteAllTasks(props) {
  return (
    <Fragment>
      <i
        className="fas fa-dumpster delete-all-icon"
        onClick={() => props.onDeleteAllTasks(props.currentListId)}
      ></i>
      <h2
        className="delete-all-desc"
        onClick={() => props.onDeleteAllTasks(props.currentListId)}
      >
        Delete all tasks
      </h2>
    </Fragment>
  );
}

export default DeleteAllTasks;
