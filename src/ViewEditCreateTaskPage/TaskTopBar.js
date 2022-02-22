import "./TaskTopBar.css";
import CancelEditTaskButton from "./CancelEditTaskButton";
import TaskBackButton from "./TaskBackButton";
import EditTaskNameInput from "./EditTaskNameInput";
import SaveTaskButton from "./SaveTaskButton";
import EditTaskButton from "./EditTaskButton";

function TaskTopBar(props) {
  // TODO: differentiate updates to data based on click to cancel vs. save task
  // could have state in ViewEditCreateTaskPage that tracks the oldData
  // and pass that in here and call App's setData based on thats

  return (
    <div className="task-header">
      {props.inEditTaskMode ? (
        <CancelEditTaskButton
          onChangePage={props.onChangePage}
          initialData={props.initialData}
          onEditData={props.onEditData}
        />
      ) : (
        <TaskBackButton onChangePage={props.onChangePage} />
      )}
      {props.inEditTaskMode ? (
        <EditTaskNameInput
          currentListId={props.currentListId}
          task={props.task}
          onEditTask={props.onEditTask}
        />
      ) : (
        <h2 id="task-name-h2">{props.task.taskName}</h2>
      )}
      {props.inEditTaskMode ? (
        <SaveTaskButton onChangePage={props.onChangePage} />
      ) : (
        <EditTaskButton onChangePage={props.onChangePage} />
      )}
    </div>
  );
}

export default TaskTopBar;
