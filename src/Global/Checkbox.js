import "./Checkbox.css";

function Checkbox(props) {
  return (
    <input
      className="set-completed-icon"
      type="checkbox"
      id={`task-${props.task.id}`}
      name={`is-task-${props.task.id}-complete`}
      defaultChecked={props.task.isTaskCompleted}
      disabled={props.disableCheckbox}
      onChange={() =>
        props.onEditTask(
          props.currentListId,
          props.task.id,
          "isTaskCompleted",
          !props.task.isTaskCompleted
        )
      }
    />
  );
}

export default Checkbox;
