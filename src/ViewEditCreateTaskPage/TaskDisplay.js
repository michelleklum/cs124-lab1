import "./TaskDisplay.css";
import DateAndTimeBar from "./DateAndTimeBar";
import AdditionalNotesBar from "./AdditionalNotesBar";
import CompletionBar from "./CompletionBar";

function TaskDisplay(props) {
  return (
    <div id="task-display">
      <DateAndTimeBar task={props.task} inEditTaskMode={props.inEditTaskMode} />
      <AdditionalNotesBar
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
      />
      <CompletionBar
        currentListId={props.currentListId}
        task={props.task}
        inEditTaskMode={props.inEditTaskMode}
        onEditTask={props.onEditTask}
      />
    </div>
  );
}

export default TaskDisplay;
