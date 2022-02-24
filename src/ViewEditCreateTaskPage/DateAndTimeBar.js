import React, { Fragment } from "react";

function convertMilitaryTimeToStandardTime(militaryTime) {
  let amPm = "AM"; // assume AM for now

  let [hour, minute] = militaryTime.split(":");
  hour = parseInt(hour);
  if (hour > 12) {
    // PM times
    hour -= 12;
    amPm = "PM";
  } else if (hour === 0) {
    // 12:__ AM
    hour = 12;
    amPm = "AM";
  }

  return `${hour}:${minute} ${amPm}`;
}

function DateAndTimeBar(props) {
  return (
    <Fragment>
      <i className="far fa-clock fa-4x set-date-icon"></i>
      <p className="set-date" onClick={props.onDateClick}>
        {props.tempTaskDate}
      </p>
      <p className="set-time" onClick={props.onTimeClick}>
        {convertMilitaryTimeToStandardTime(props.tempTaskTime)}
      </p>
    </Fragment>
  );
}

export default DateAndTimeBar;
