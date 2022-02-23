import "./TaskTopBar.css";
import CancelEditTaskButton from "./CancelEditTaskButton";
import TaskBackButton from "./TaskBackButton";
import EditTaskNameInput from "./EditTaskNameInput";
import SaveTaskButton from "./SaveTaskButton";
import EditTaskButton from "./EditTaskButton";

function TaskTopBar(props) {
  // var confirmButton;
  // if (props.inEditTaskMode) {
  //   confirmButton =
  //   <SaveTaskButton onChangePage={props.onChangePage} />
  // }
  // else if (props.inCreateTaskMode) {
  //   confirmButton =
  //     <div className="right-aligned create-mode-confirm">
  //       <i className="fas fa-check fa-4x"
  //         onClick={() => confirmCreateList()}></i>
  //     </div>
  // }
  // else {
  //   confirmButton =
  //     <div className="right-aligned">
  //       <i className="fas fa-check fa-4x" id="no-info"></i>
  //     </div>
  // }

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
