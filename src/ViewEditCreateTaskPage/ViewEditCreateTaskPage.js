import React, { useState } from "react";
import "./ViewEditCreateTaskPage.css";
import TaskTopBar from "./TaskTopBar";
import TaskDisplay from "./TaskDisplay";
import DeleteTaskBar from "./DeleteTaskBar";

function ViewEditCreateTaskPage(props) {
  const list = props.data.find((list) => list.id === props.currentListId);
  const currentTask = list.listTasks.find((task) => task.id === props.currentTaskId);
  const task = (
    currentTask ? currentTask :
      {
        taskName: "",
        taskDate: "",
        taskTime: "",
        taskNotes: "",
        isTaskCompleted: false,
      }
  );


  const [tempTaskName, setTempTaskName] = useState(task.taskName);
  const [tempTaskDate, setTempTaskDate] = useState(task.taskDate);
  const [tempTaskTime, setTempTaskTime] = useState(task.taskTime);
  const [tempTaskNotes, setTempTaskNotes] = useState(task.taskNotes);
  const [tempTaskStatus, setTempTaskStatus] = useState(task.isTaskCompleted);
  
  return (
    <div id="task-page">
      <TaskTopBar
        task={task}
        prevPage={props.prevPage}
        currentListId={props.currentListId}
        currentTaskId={props.currentTaskId}
        onChangePage={props.onChangePage}
        inEditTaskMode={props.inEditTaskMode}
        inCreateTaskMode={props.inCreateTaskMode}
        onEditTask={props.onEditTask}
        onCreateTask={props.onCreateTask}
        tempTaskName={tempTaskName}
        onChangeTaskName={setTempTaskName}
        tempTaskDate={tempTaskDate}
        onChangeTaskDate={setTempTaskDate}
        tempTaskTime={tempTaskTime}
        onChangeTaskTime={setTempTaskTime}
        tempTaskNotes={tempTaskNotes}
        onChangeTaskNotes={setTempTaskNotes}
        tempTaskStatus={tempTaskStatus}
        onEditAllTaskFields={props.onEditAllTaskFields}
      />
      <hr />
      <TaskDisplay
        task={task}
        currentListId={props.currentListId}
        currentTaskId={props.currentTaskId}
        inEditTaskMode={props.inEditTaskMode}
        inCreateTaskMode={props.inCreateTaskMode}
        tempTaskDate={tempTaskDate}
        onChangeTaskDate={setTempTaskDate}
        tempTaskTime={tempTaskTime}
        onChangeTaskTime={setTempTaskTime}
        tempTaskNotes={tempTaskNotes}
        onChangeTaskNotes={setTempTaskNotes}
        tempTaskStatus={tempTaskStatus}
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
