import "./ListMenu.css";
import EditListBar from "./EditListBar";
import HideCompletedBar from "./HideCompletedBar";
import DeleteCompletedBar from "./DeleteCompletedBar";
import DeleteAllTasksBar from "./DeleteAllTasksBar";
import DeleteListBar from "./DeleteListBar";

function ListMenu(props) {
  const taskList = props.data.find((list) => list.id === props.currentListId);

  return (
    <div className="bottom-toolbar-edit-list-menu">
      <EditListBar />
      <HideCompletedBar
        areCompletedTasksHidden={taskList.areCompletedTasksHidden}
        currentListId={props.currentListId}
        onEditList={props.onEditList}
      />
      <DeleteCompletedBar
        currentListId={props.currentListId}
        onDeleteCompleted={props.onDeleteCompleted}
      />
      <DeleteAllTasksBar
        currentListId={props.currentListId}
        onDeleteAllTasks={props.onDeleteAllTasks}
      />
      <DeleteListBar
        currentListId={props.currentListId}
        onDeleteList={props.onDeleteList}
      />
    </div>
  );
}

export default ListMenu;
