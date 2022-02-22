import React, { Fragment } from "react";

function Checkbox(props) {
  function handleEditTaskCompletionStatus() {
    props.onEditTask(
      props.currentListId,
      props.task.id,
      "isTaskCompleted",
      !props.task.isTaskCompleted
    );
  }

  // TODO: We styled the checkbox directly in the JSX because otherwise, the checkbox icon wouldn't appear.

  // fa-stop is a solid filled-in checkbox from Font Awesome.
  // To make it an outline instead, we turned its color to #FeFFFF to blend in with background,
  // and added a border.
  return (
    <Fragment>
      {props.task.isTaskCompleted ? (
        <i
          id={`task-${props.task.id}`}
          name={`is-task-${props.task.id}-complete`}
          className="fas fa-solid fa-check fa-4x set-completed-icon checkbox-checked"
          style={{
            color: "#91C6C3",
            fontSize: "23px",
            padding: "2px",
            border: "#91C6C3 solid medium",
            borderRadius: "7px",
          }}
          onClick={
            props.disableCheckbox ? null : handleEditTaskCompletionStatus
          }
        ></i>
      ) : (
        <i
          id={`task-${props.task.id}`}
          name={`is-task-${props.task.id}-complete`}
          className="fas fa-solid fa-stop fa-4x set-completed-icon checkbox-unchecked"
          style={{
            color: "#FeFFFF",
            fontSize: "23px",
            padding: "2px 3.5px",
            border: "#91C6C3 solid medium",
            borderRadius: "7px",
          }}
          onClick={
            props.disableCheckbox ? null : handleEditTaskCompletionStatus
          }
        ></i>
      )}
    </Fragment>
  );
}

export default Checkbox;
