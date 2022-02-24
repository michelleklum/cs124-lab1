import "./TaskDisplay.css";
import DateAndTimeBar from "./DateAndTimeBar";
import AdditionalNotesBar from "./AdditionalNotesBar";
import CompletionBar from "./CompletionBar";

function TaskDisplay(props) {
  return (
    <div id="task-display">
      <DateAndTimeBar
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
        tempTaskDate={props.tempTaskDate}
        onChangeTaskDate={props.onChangeTaskDate}
        tempTaskTime={props.tempTaskTime}
        onChangeTaskTime={props.onChangeTaskTime} />
      <AdditionalNotesBar
        currentListId={props.currentListId}
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
        inCreateTaskMode={props.inCreateTaskMode}
        tempTaskNotes={props.tempTaskNotes}
        onChangeTaskNotes={props.onChangeTaskNotes}
      />
      {(!props.inCreateTaskMode) &&
        <CompletionBar
          currentListId={props.currentListId}
          inEditTaskMode={props.inEditTaskMode}
          onEditTask={props.onEditTask}
          tempTaskStatus={props.tempTaskStatus}
          task={props.task}
        />}
    </div>
  );
}

export default TaskDisplay;
