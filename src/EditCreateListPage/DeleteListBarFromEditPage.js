function DeleteListBarFromEditPage(props) {
  return (
    <div
      className="bottom-toolbar"
      onClick={() =>
        props.onDeleteList(props.currentListId)
      }
    >
      <i className="fas fa-trash-alt fa-4x trash"></i>
    </div>
  );
}

export default DeleteListBarFromEditPage;
