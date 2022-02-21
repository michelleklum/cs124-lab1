import React, { Fragment } from "react";

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

function DateAndTimeBar(props) {
  return (
    <Fragment>
      <i className="far fa-clock fa-4x set-date-icon"></i>
      <p className="set-date">{props.task.taskDate}</p>
      <p className="set-time">
        {convertMilitaryTimeToStandardTime(props.task.taskTime)}
      </p>
    </Fragment>
  );
}

export default DateAndTimeBar;
