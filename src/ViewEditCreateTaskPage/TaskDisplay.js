import React, { useState } from "react";
import "./TaskDisplay.css";
import DateAndTimeBar from "./DateAndTimeBar";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import AdditionalNotesBar from "./AdditionalNotesBar";
import CompletionBar from "./CompletionBar";

function TaskDisplay(props) {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openTimePicker, setOpenTimePicker] = useState(false);

  function toggleDatePicker() {
    setOpenDatePicker(!openDatePicker);

    // close TimePicker if it's open
    if (openTimePicker) {
      toggleTimePicker();
    }
  }

  function toggleTimePicker() {
    setOpenTimePicker(!openTimePicker);

    // close DatePicker if it's open
    if (openDatePicker) {
      toggleDatePicker();
    }
  }

  return (
    <div
      id="task-display"
      className={
        openDatePicker || openTimePicker
          ? "task-display-picker-open"
          : "task-display-picker-closed"
      }
    >
      <DateAndTimeBar
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
        onDateClick={props.inEditTaskMode ? toggleDatePicker : null}
        onTimeClick={props.inEditTaskMode ? toggleTimePicker : null}
      />
      <AdditionalNotesBar
        currentListId={props.currentListId}
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
        onEditTask={props.onEditTask}
        openDatePicker={openDatePicker}
        openTimePicker={openTimePicker}
      />
      {openDatePicker ? (
        <DatePicker
          currentListId={props.currentListId}
          task={props.task}
          onEditTask={props.onEditTask}
        />
      ) : null}
      {openTimePicker ? (
        <TimePicker
          currentListId={props.currentListId}
          task={props.task}
          onEditTask={props.onEditTask}
        />
      ) : null}
      <CompletionBar
        currentListId={props.currentListId}
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
        onEditTask={props.onEditTask}
        openDatePicker={openDatePicker}
        openTimePicker={openTimePicker}
      />
    </div>
  );
}

export default TaskDisplay;
