import "./ListOfTasks.css";
import TaskCard from "./TaskCard";

function ListOfTasks(props) {
  const taskList = props.data.find((list) => list.id === props.currentListId);

  const tasks = taskList.areCompletedTasksHidden
    ? taskList.listTasks.filter((task) => task.isTaskCompleted === false)
    : taskList.listTasks;

  function sortTasksCompareFunction(a, b) {
    return new Date(a.taskDate) < new Date(b.taskDate) ? -1 : 1;
  }

  return (
    <div id="list-of-tasks">
      {tasks.sort(sortTasksCompareFunction).map((task) => (
        <TaskCard
          key={task.id}
          currentListId={props.currentListId}
          task={task}
          onChangePage={props.onChangePage}
          onChangeTask={props.onChangeTask}
          onEditTask={props.onEditTask}
        />
      ))}
    </div>
  );
}

export default ListOfTasks;
