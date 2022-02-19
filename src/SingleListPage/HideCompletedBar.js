import React, { Fragment } from "react";

function HideCompletedBar(props) {
  return (
    <Fragment>
      {props.areCompletedTasksHidden ? (
        <Fragment>
          <i className="fas fa-eye hide-icon"></i>
          <h2 className="hide-desc">Show completed tasks</h2>
        </Fragment>
      ) : (
        <Fragment>
          <i className="fas fa-eye-slash hide-icon"></i>
          <h2 className="hide-desc">Hide completed tasks</h2>
        </Fragment>
      )}
    </Fragment>
  );
}

export default HideCompletedBar;
