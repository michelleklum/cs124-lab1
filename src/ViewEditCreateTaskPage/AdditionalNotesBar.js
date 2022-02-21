import React, { Fragment } from "react";

function AdditionalNotesBar(props) {
  return (
    <Fragment>
      <i className="fas fa-sticky-note fa-4x set-note-icon"></i>
      <p className="set-note">
        {props.task.taskNotes || "No additional notes"}
      </p>
    </Fragment>
  );
}

export default AdditionalNotesBar;
