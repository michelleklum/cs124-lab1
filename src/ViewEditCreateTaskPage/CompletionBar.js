import React, { Fragment } from "react";
import Checkbox from "../Global/Checkbox";

function CompletionBar(props) {
  return (
    <Fragment>
      {props.inEditTaskMode ? (
        <Checkbox
          currentListId={props.currentListId}
          task={props.task}
          disableCheckbox={false}
          onEditTask={props.onEditTask}
          openDatePicker={props.openDatePicker}
          openTimePicker={props.openTimePicker}
        />
      ) : (
        <Checkbox
          currentListId={props.currentListId}
          task={props.task}
          disableCheckbox={true}
          onEditTask={props.onEditTask}
          openDatePicker={props.openDatePicker}
          openTimePicker={props.openTimePicker}
        />
      )}
      <p
        className={[
          "set-completed",
          props.openDatePicker || props.openTimePicker
            ? "set-completed-picker-open"
            : "set-completed-picker-closed",
        ].join(" ")}
      >
        {props.inEditTaskMode
          ? "Completed?"
          : props.task.isTaskCompleted
          ? "Completed"
          : "Not completed"}
      </p>
    </Fragment>
  );
}

export default CompletionBar;
