import "./EditCreateListPage.css";
import EditListTopBar from "./EditListTopBar";

function EditCreateListPage(props) {
  /* TODO: when in create mode, task shouldn't be saved until user types something, etc. */
  const list = props.data.find((list) => list.id === props.currentListId);

  return (
    <div id="edit-list-page">
      <div className="edit-list-header top-bar">
        <EditListTopBar onChangePage={props.onChangePage}/>
      </div>
    </div>
  );
}

export default EditCreateListPage;
