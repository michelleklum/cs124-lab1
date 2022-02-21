import "./EditListButton.css";

function EditListButton(props) {
  return (
    <i
      className="fas fa-pencil-alt fa-4x edit-list"
      onClick={() => props.onChangePage("HomeSearchPage")}
    ></i>
  );
}

export default EditListButton;
