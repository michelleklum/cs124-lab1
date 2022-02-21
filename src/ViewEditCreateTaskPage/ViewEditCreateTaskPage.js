import "./ViewEditCreateTaskPage.css";
import TaskTopBar from "./TaskTopBar";
import TaskDisplay from "./TaskDisplay";
import DeleteTaskBar from "./DeleteTaskBar";

function ViewEditCreateTaskPage(props) {
  /* TODO: when in create mode, task shouldn't be saved until user types something, etc. */
  const list = props.data.find((list) => list.id === props.currentListId);
  const task = list.listTasks.find((task) => task.id === props.currentTaskId);

  return (
    <div id="task-page">
      <TaskTopBar
        currentTaskId={props.currentTaskId}
        task={task}
        onChangePage={props.onChangePage}
        inEditTaskMode={props.inEditTaskMode}
      />
      <hr />
      <TaskDisplay
        currentListId={props.currentListId}
        currentTaskId={props.currentTaskId}
        task={task}
        inEditTaskMode={props.inEditTaskMode}
        onEditTask={props.onEditTask}
      />
      {props.inEditTaskMode ? <DeleteTaskBar /> : null}
    </div>
  );
}

export default ViewEditCreateTaskPage;
