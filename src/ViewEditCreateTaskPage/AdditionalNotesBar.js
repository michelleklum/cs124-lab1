import React, { Fragment } from "react";
import AdditionalNotesEditor from "./AdditionalNotesEditor";

function AdditionalNotesBar(props) {
  return (
    <Fragment>
      <i className="fas fa-sticky-note fa-4x set-note-icon"></i>
      {props.inEditTaskMode ? (
        <AdditionalNotesEditor
          className="set-note"
          currentListId={props.currentListId}
          task={props.task}
          onEditTask={props.onEditTask}
        />
      ) : (
        <p className="set-note">
          {props.task.taskNotes || "No additional notes"}
        </p>
      )}
    </Fragment>
  );
}

export default AdditionalNotesBar;
