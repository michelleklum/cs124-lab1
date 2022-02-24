import React, { Fragment } from "react";
import Checkbox from "../Global/Checkbox";

function CompletionBar(props) {
  return (
    <Fragment>
      {props.inEditTaskMode ? (
        <Checkbox
          task={props.task}
          tempTaskStatus={props.tempTaskStatus}
          disableCheckbox={false}
          onChangeTaskStatus={props.onChangeTaskStatus}
          openDatePicker={props.openDatePicker}
          openTimePicker={props.openTimePicker}
        />
      ) : (
        <Checkbox
          task={props.task}
          tempTaskStatus={props.tempTaskStatus}
          disableCheckbox={true}
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
        {props.tempTaskStatus ? "Completed" : "Not completed"}
      </p>
    </Fragment>
  );
}

export default CompletionBar;
