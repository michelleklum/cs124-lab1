import "./ListOfTasks.css";
import TaskCard from "./TaskCard";

function ListOfTasks(props) {
  const taskList = props.data.find((list) => list.id === props.currentListId);

  const tasks = taskList.areCompletedTasksHidden
    ? taskList.listTasks.filter((task) => !task.isTaskCompleted)
    : taskList.listTasks;

  const completedTasks = tasks.filter((task) => task.isTaskCompleted);
  const incompleteTasks = tasks.filter((task) => !task.isTaskCompleted);

  // Put incomplete tasks first, and then completed tasks.
  // Within each sublist (i.e., incomplete tasks), sort by date.
  const sortedTasks = incompleteTasks
    .sort(sortTasksByDateCompareFunction)
    .concat(completedTasks.sort(sortTasksByDateCompareFunction));

  function sortTasksByDateCompareFunction(a, b) {
    return new Date(a.taskDate) < new Date(b.taskDate) ? -1 : 1;
  }

  return (
    <div id="list-of-tasks">
      {sortedTasks.map((task) => (
        <TaskCard
          key={task.id}
          currentListId={props.currentListId}
          task={task}
          inMenuMode={props.inMenuMode}
          onChangePage={props.onChangePage}
          onChangeTask={props.onChangeTask}
          onEditTask={props.onEditTask}
        />
      ))}
    </div>
  );
}

export default ListOfTasks;
