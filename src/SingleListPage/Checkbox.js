import "./Checkbox.css";

function Checkbox(props) {
  return (
    <input
      type="checkbox"
      id={`task-${props.task.id}`}
      name={`is-task-${props.task.id}-complete`}
      defaultChecked={props.task.isTaskCompleted}
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
