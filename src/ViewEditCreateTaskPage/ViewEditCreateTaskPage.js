import React, { useState } from "react";
import "./ViewEditCreateTaskPage.css";
import TaskTopBar from "./TaskTopBar";
import TaskDisplay from "./TaskDisplay";
import DeleteTaskBar from "./DeleteTaskBar";

function ViewEditCreateTaskPage(props) {
  /* TODO: when in create mode, task shouldn't be saved until user types something, etc. */
  const list = props.data.find((list) => list.id === props.currentListId);
  const task = list.listTasks.find((task) => task.id === props.currentTaskId);

  /* TODO: Better way of capturing the previous state data for cancel edit task button? */
  const [initialData, setInitialData] = useState(props.data);

  return (
    <div id="task-page">
      <TaskTopBar
        currentListId={props.currentListId}
        currentTaskId={props.currentTaskId}
        task={task}
        onChangePage={props.onChangePage}
        inEditTaskMode={props.inEditTaskMode}
        initialData={initialData}
        onEditData={props.onEditData}
        onEditTask={props.onEditTask}
      />
      <hr />
      <TaskDisplay
        currentListId={props.currentListId}
        currentTaskId={props.currentTaskId}
        task={task}
        inEditTaskMode={props.inEditTaskMode}
        onEditTask={props.onEditTask}
      />
      {props.inEditTaskMode ? (
        <DeleteTaskBar
          currentListId={props.currentListId}
          currentTaskId={props.currentTaskId}
          onDeleteTask={props.onDeleteTask}
        />
      ) : null}
    </div>
  );
}

export default ViewEditCreateTaskPage;
