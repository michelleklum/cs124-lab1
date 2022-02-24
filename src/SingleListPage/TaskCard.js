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
        <label htmlFor={`task-${props.task.id}`}>
          <h2>{props.task.taskName}</h2>
        </label>
        <p className="date">
          {(props.task.taskDate !== "") ? props.task.taskDate : ""},{" "}
          {(props.task.taskTime !== "") ? convertMilitaryTimeToStandardTime(props.task.taskTime): ""}
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
