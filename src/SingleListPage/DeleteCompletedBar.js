import React, { Fragment } from "react";

function DeleteCompletedBar(props) {
  return (
    <Fragment>
      <i
        className="fas fa-trash-alt delete-completed-icon"
        onClick={() => props.onDeleteCompleted(props.currentListId)}
      ></i>
      <h2
        className="delete-completed-desc"
        onClick={() => props.onDeleteCompleted(props.currentListId)}
      >
        Delete completed tasks
      </h2>
    </Fragment>
  );
}

export default DeleteCompletedBar;
