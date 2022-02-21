import "./DeleteListButton.css";

function DeleteListButton(props) {
  return (
    <i
      className="fas fa-trash-alt fa-4x delete-list"
      onClick={() => props.onDeleteList(props.id)}
    ></i>
  );
}

export default DeleteListButton;
