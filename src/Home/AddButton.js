import "./AddButton.css";

function AddButton(props) {
  return (
    <div className="add-button" onClick={() => props.onChangePage("CreateListPage")}>
      <i className="fas fa-plus fa-4x"></i>
    </div>
  );
}

export default AddButton;
