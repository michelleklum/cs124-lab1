function SaveTaskButton(props) {
  function confirmEditTask() {
    props.onEditAllTaskFields(
      props.currentListId,
      props.currentTaskId,
      props.taskName,
      props.taskDate,
      props.taskTime,
      props.taskNotes,
      props.taskStatus
    );
    props.onChangePage("SingleListPage");
  }

  function confirmCreateTask() {
    props.onCreateTask(
      props.currentListId,
      props.taskName,
      props.taskDate,
      props.taskTime,
      props.taskNotes
    );
    props.onChangePage("SingleListPage");
  }

  return (
    <div>
      {props.inEditTaskMode && (
        <i className="fas fa-check fa-4x" onClick={() => confirmEditTask()}></i>
      )}
      {props.inCreateTaskMode && props.taskName !== "" && (
        <i
          className="fas fa-check fa-4x"
          onClick={() => confirmCreateTask()}
        ></i>
      )}
      {props.inCreateTaskMode && props.taskName === "" && (
        <i className="fas fa-check fa-4x" id="no-info"></i>
      )}
    </div>
  );
}

export default SaveTaskButton;
