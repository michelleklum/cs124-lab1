import "./ListMenu.css";
import EditListBar from "./EditListBar";
import HideCompletedBar from "./HideCompletedBar";
import DeleteCompletedBar from "./DeleteCompletedBar";
import DeleteAllTasksBar from "./DeleteAllTasksBar";
import DeleteListBar from "./DeleteListBar";

function ListMenu(props) {
  return (
    <div className="bottom-toolbar-edit-list-menu">
      <EditListBar />
      <HideCompletedBar
        areCompletedTasksHidden={props.areCompletedTasksHidden}
      />
      <DeleteCompletedBar />
      <DeleteAllTasksBar />
      <DeleteListBar />
    </div>
  );
}

export default ListMenu;
