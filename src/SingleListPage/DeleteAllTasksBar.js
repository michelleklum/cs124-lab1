import React, { Fragment } from "react";

function DeleteAllTasks() {
  return (
    <Fragment>
      <i className="fas fa-dumpster delete-all-icon"></i>
      <h2 className="delete-all-desc">Delete all tasks</h2>
    </Fragment>
  );
}

export default DeleteAllTasks;
