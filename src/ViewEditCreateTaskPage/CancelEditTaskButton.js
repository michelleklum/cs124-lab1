function CancelEditTaskButton(props) {
  function handleCancelEditTask() {
    // Canceling task changes, so reset data to what it was prior to any changes made on this Edit Task Page
    props.onEditData(props.initialData);
    props.onChangePage("SingleListPage");
  }
  return <i className="fas fa-times fa-4x" onClick={handleCancelEditTask}></i>;
}

export default CancelEditTaskButton;
