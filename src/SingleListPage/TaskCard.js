import "./TaskCard.css";
import Checkbox from "../Global/Checkbox";

function convertMilitaryTimeToStandardTime(militaryTime) {
  let amPm = "AM"; // assume AM for now

  let [hour, minute] = militaryTime.split(":");
  hour = parseInt(hour);
  if (hour > 12) {
    // PM times
    hour -= 12;
    amPm = "PM";
  }

  return `${hour}:${minute} ${amPm}`;
}

function TaskCard(props) {
  function handleTaskCardClick() {
    props.onChangePage("ViewTaskPage");
    props.onChangeTask(props.task.id);
  }

  return (
    <div className="task">
      <div className="left-aligned">
        <Checkbox
          className="checkbox"
          currentListId={props.currentListId}
          task={props.task}
          disableCheckbox={props.inMenuMode ? true : false}
          onEditTask={props.onEditTask}
        />
      </div>

      <div
        className="task-and-date"
        onClick={props.inMenuMode ? null : handleTaskCardClick}
      >
        {((props.task.taskDate === "") && (props.task.taskTime === "")) ?
          <label htmlFor={`task-${props.task.id}`}>
            <h2 id="no-date">{props.task.taskName}</h2>
          </label>
          : <label htmlFor={`task-${props.task.id}`}>
            <h2>{props.task.taskName}</h2>
          </label>}
        {((props.task.taskDate !== "") && (props.task.taskTime !== "")) ?
          <p className="date">
            {props.task.taskDate},{" "}
            {convertMilitaryTimeToStandardTime(props.task.taskTime)}
          </p> : null}
        {((props.task.taskDate === "") && (props.task.taskTime !== "")) ?
          <p className="date">
            {(props.task.taskTime !== "") ? convertMilitaryTimeToStandardTime(props.task.taskTime) : ""}
          </p> : null}
        {((props.task.taskTime === "") && (props.task.taskDate !== "")) ?
          <p className="date">
            {props.task.taskDate}
          </p> : null}
      </div>
    </div>
  );
}

export default TaskCard;
