import React, { Fragment } from "react";

function DeleteListBar() {
  return (
    <Fragment>
      <i className="fas fa-dumpster-fire delete-list-icon"></i>
      <h2 className="delete-list-desc">Delete list</h2>
    </Fragment>
  );
}

export default DeleteListBar;
