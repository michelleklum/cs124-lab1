function CancelEditTaskButton(props) {
  function handleCancelEditTask() {
    props.onChangePage("SingleListPage");
  }
  return <i className="fas fa-times fa-4x" onClick={handleCancelEditTask}></i>;
}

export default CancelEditTaskButton;
