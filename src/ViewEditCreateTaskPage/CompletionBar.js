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
        />
      ) : (
        <Checkbox
          currentListId={props.currentListId}
          task={props.task}
          disableCheckbox={true}
          onEditTask={props.onEditTask}
        />
      )}
      <p className="set-completed">
        {props.inEditTaskMode
          ? "Completed?"
          : props.tempTaskStatus
          ? "Completed"
          : "Not completed"}
      </p>
    </Fragment>
  );
}

export default CompletionBar;
