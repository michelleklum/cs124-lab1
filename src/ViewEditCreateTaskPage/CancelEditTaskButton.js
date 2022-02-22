function CancelEditTaskButton(props) {
  function handleCancelEditTask() {
    // reset data to what it was before going to Edit Task Page
    props.onEditData(props.initialData);
    props.onChangePage("SingleListPage");
  }
  return <i className="fas fa-times fa-4x" onClick={handleCancelEditTask}></i>;
}

export default CancelEditTaskButton;
