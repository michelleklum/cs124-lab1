import React, { Fragment } from "react";
import AdditionalNotesEditor from "./AdditionalNotesEditor";

function AdditionalNotesBar(props) {
  return (
    <Fragment>
      <i
        className={[
          "fas fa-sticky-note fa-4x set-note-icon",
          props.openDatePicker || props.openTimePicker
            ? "set-note-icon-picker-open"
            : "set-note-icon-picker-closed",
        ].join(" ")}
      ></i>
      {props.inEditTaskMode ? (
        <AdditionalNotesEditor
          className={[
            "set-note",
            props.openDatePicker || props.openTimePicker
              ? "set-note-picker-open"
              : "set-note-picker-closed",
          ].join(" ")}
          currentListId={props.currentListId}
          task={props.task}
          onEditTask={props.onEditTask}
        />
      ) : (
        <p
          className={[
            "set-note",
            props.openDatePicker || props.openTimePicker
              ? "set-note-picker-open"
              : "set-note-picker-closed",
          ].join(" ")}
        >
          {props.task.taskNotes || "No additional notes"}
        </p>
      )}
    </Fragment>
  );
}

export default AdditionalNotesBar;
