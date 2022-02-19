import React, { Fragment } from "react";

function DeleteCompletedBar() {
  return (
    <Fragment>
      <i className="fas fa-trash-alt delete-completed-icon"></i>
      <h2 className="delete-completed-desc">Delete completed tasks</h2>
    </Fragment>
  );
}

export default DeleteCompletedBar;
