import React, { Fragment } from "react";
import AdditionalNotesEditor from "./AdditionalNotesEditor";

function AdditionalNotesBar(props) {
  return (
    <Fragment>
      <i className="fas fa-sticky-note fa-4x set-note-icon"></i>
      {(props.inEditTaskMode || props.inCreateTaskMode) ? (
        <AdditionalNotesEditor
          className="set-note"
          currentListId={props.currentListId}
          tempTaskNotes={props.tempTaskNotes}
          onChangeTaskNotes={props.onChangeTaskNotes}
        />
      ) : (
        <p className="set-note">
          {props.tempTaskNotes || "No additional notes"}
        </p>
      )}
    </Fragment>
  );
}

export default AdditionalNotesBar;
