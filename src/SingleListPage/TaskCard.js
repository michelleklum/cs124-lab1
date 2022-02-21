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
          currentListId={props.currentListId}
          task={props.task}
          disableCheckbox={false}
          onEditTask={props.onEditTask}
        />
        <div className="task-and-date" onClick={handleTaskCardClick}>
          <label htmlFor={`task-${props.task.id}`}>
            <h2>{props.task.taskName}</h2>
          </label>
          <p className="date">
            {props.task.taskDate},{" "}
            {convertMilitaryTimeToStandardTime(props.task.taskTime)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
