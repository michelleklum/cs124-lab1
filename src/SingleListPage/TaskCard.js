import "./TaskCard.css";

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
  return (
    <div className="task">
      <div className="left-aligned">
        <input type="checkbox" id={props.id} name={`${props.id}-done`} />
        <div className="task-and-date">
          <label htmlFor={props.id}>
            <h2>{props.taskName}</h2>
          </label>
          <p className="date">
            {props.taskDate},{" "}
            {convertMilitaryTimeToStandardTime(props.taskTime)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
