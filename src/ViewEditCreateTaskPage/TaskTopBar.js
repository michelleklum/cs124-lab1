import "./TaskTopBar.css";
import TaskBackButton from "./TaskBackButton";

function TaskTopBar(props) {
  return (
    <div className="task-header">
      <TaskBackButton onChangePage={props.onChangePage} />
      <h2 id="task-name-h2">{props.task.taskName}</h2>
      <i className="fas fa-pencil-alt fa-4x"></i>
    </div>
  );
}

export default TaskTopBar;
