import "./EditCreateListPage.css";

function EditCreateListPage(props) {
  /* TODO: when in create mode, task shouldn't be saved until user types something, etc. */
  const list = props.data.find((list) => list.id === props.currentListId);

  return (
    <div id="edit-list-page">
      <div class="edit-list-header top-bar">
      </div>
    </div>
  );
}

export default EditCreateListPage;
