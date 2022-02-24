import React, { useState } from "react";
import "./TimePicker.css";

function getHourMinAmPm(militaryTime) {
  let amPm = "AM"; // assume AM for now

  let [hour, minute] = militaryTime.split(":");
  hour = parseInt(hour);
  if (hour > 12) {
    // PM times
    hour -= 12;
    amPm = "PM";
  }

  return [hour, formatMinuteStr(parseInt(minute)), amPm];
}

function getPrevHour(hour) {
  let prevHour = parseInt(hour) - 1;
  if (prevHour === 0) {
    prevHour = 12;
  }
  return prevHour;
}

function getPrevMinute(minute) {
  let prevMin = parseInt(minute) - 5;
  if (prevMin === -5) {
    prevMin = 55;
  }
  return formatMinuteStr(prevMin);
}

function getNextHour(hour) {
  let nextHour = parseInt(hour) + 1;
  if (nextHour === 13) {
    nextHour = 1;
  }
  return nextHour;
}

function getNextMinute(minute) {
  let nextMin = parseInt(minute) + 5;
  if (nextMin === 60) {
    nextMin = 0;
  }
  return formatMinuteStr(nextMin);
}

function formatMinuteStr(minuteInt) {
  const minuteStr = minuteInt.toString();
  const minuteFormatted = minuteStr.length === 2 ? minuteStr : "0" + minuteStr;
  return minuteFormatted;
}

function convertStandardTimeToMilitaryTime(hour, minute, amPm) {
  let militaryHour = hour;
  if (hour < 12 && amPm === "PM") {
    // PM times
    militaryHour = hour + 12;
  }

  if (hour === 12 && amPm === "AM") {
    // 12:__ AM
    militaryHour = 0;
  }

  if (hour === 12 && amPm === "PM") {
    // 12:__ PM
    militaryHour = 12;
  }

  return `${militaryHour}:${minute}`;
}

function TimePicker(props) {
  const [initialHour, initialMinute, initialAmPm] = getHourMinAmPm(
    props.task.taskTime
  );
  const [selectedHour, setSelectedHour] = useState(initialHour);
  const [selectedMinute, setSelectedMinute] = useState(initialMinute);
  const [selectedAmPm, setSelectedAmPm] = useState(initialAmPm);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  /* The three functions below handle user swiping up or down on hour / minute / amPm to look through the times */
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function updateTaskTime(hour, minute, amPm) {
    // TODO: convert from standard to military time
    props.onEditTask(
      props.currentListId,
      props.task.id,
      "taskTime",
      convertStandardTimeToMilitaryTime(hour, minute, amPm)
    );
  }

  function handleTouchEnd(e) {
    if (touchStart - touchEnd > 10) {
      // need to call updateTaskTime on getNextHour(selectedHour) before and separately from
      // call to setSelectedHour on getNextHour(selectedHour) because useState and setState
      // are asynchronous and won't update immediately

      // eslint-disable-next-line default-case
      switch (e.target.className) {
        case "prev-hour":
        case "selected-hour":
        case "next-hour":
          updateTaskTime(
            getNextHour(selectedHour),
            selectedMinute,
            selectedAmPm
          );
          setSelectedHour(getNextHour(selectedHour));
          break;
        case "prev-minute":
        case "selected-minute":
        case "next-minute":
          updateTaskTime(
            selectedHour,
            getNextMinute(selectedMinute),
            selectedAmPm
          );
          setSelectedMinute(getNextMinute(selectedMinute));
          break;
        case "selected-am-pm":
        case "not-selected-am-pm":
          updateTaskTime(
            selectedHour,
            selectedMinute,
            selectedAmPm === "AM" ? "PM" : "AM"
          );
          setSelectedAmPm(selectedAmPm === "AM" ? "PM" : "AM");
          break;
      }
    }
    if (touchStart - touchEnd < -10) {
      // need to call updateTaskTime on getPrevHour(selectedHour) before and separately from
      // call to setSelectedHour on getPrevHour(selectedHour) because useState and setState
      // are asynchronous and won't update immediately

      // eslint-disable-next-line default-case
      switch (e.target.className) {
        case "prev-hour":
        case "selected-hour":
        case "next-hour":
          updateTaskTime(
            getPrevHour(selectedHour),
            selectedMinute,
            selectedAmPm
          );
          setSelectedHour(getPrevHour(selectedHour));
          break;
        case "prev-minute":
        case "selected-minute":
        case "next-minute":
          updateTaskTime(
            selectedHour,
            getPrevMinute(selectedMinute),
            selectedAmPm
          );
          setSelectedMinute(getPrevMinute(selectedMinute));
          break;
        case "selected-am-pm":
        case "not-selected-am-pm":
          updateTaskTime(
            selectedHour,
            selectedMinute,
            selectedAmPm === "AM" ? "PM" : "AM"
          );
          setSelectedAmPm(selectedAmPm === "AM" ? "PM" : "AM");
          break;
      }
    }
  }

  return (
    <div className="time-picker">
      <p
        className="prev-hour"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getPrevHour(selectedHour)}
      </p>
      <p
        className="prev-minute"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getPrevMinute(selectedMinute)}
      </p>

      <p
        className="selected-hour"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {selectedHour}
      </p>
      <p
        className="selected-minute"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {selectedMinute}
      </p>
      <p
        className="selected-am-pm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {selectedAmPm}
      </p>

      <p
        className="next-hour"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getNextHour(selectedHour)}
      </p>
      <p
        className="next-minute"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getNextMinute(selectedMinute)}
      </p>
      <p
        className="not-selected-am-pm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {selectedAmPm === "AM" ? "PM" : "AM"}
      </p>
    </div>
  );
}

export default TimePicker;
