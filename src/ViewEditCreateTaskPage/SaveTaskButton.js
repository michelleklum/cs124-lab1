function SaveTaskButton(props) {
  return (
    <i
      className="fas fa-check fa-4x"
      onClick={() => props.onChangePage("SingleListPage")}
    ></i>
  );
}

export default SaveTaskButton;
