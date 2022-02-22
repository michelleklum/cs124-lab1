function DeleteTaskBar(props) {
  return (
    <div
      className="bottom-toolbar"
      onClick={() =>
        props.onDeleteTask(props.currentListId, props.currentTaskId)
      }
    >
      <i className="fas fa-trash-alt fa-4x trash"></i>
    </div>
  );
}

export default DeleteTaskBar;
