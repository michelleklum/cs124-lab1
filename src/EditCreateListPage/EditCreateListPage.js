import "./EditCreateListPage.css";
import EditListTopBar from "./EditListTopBar";

function EditCreateListPage(props) {
  /* TODO: when in create mode, task shouldn't be saved until user types something, etc. */
  const list = props.data.find((list) => list.id === props.currentListId);
  
  return (
    <div id="edit-list-page">
      <div className="edit-list-header top-bar">
        <EditListTopBar
          data={props.data}
          onChangePage={props.onChangePage}
          currentListId={props.currentListId}
          currentListName={list.listName} 
          onEditList={props.onEditList}/>
      </div>
    </div>
  );
}

export default EditCreateListPage;
