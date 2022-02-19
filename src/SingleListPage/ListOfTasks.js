import "./ListOfTasks.css";
import TaskCard from "./TaskCard";

function ListOfTasks(props) {
  const tasks = props.list.areCompletedTasksHidden
    ? props.list.listTasks.filter((task) => task.isTaskCompleted === false)
    : props.list.listTasks;

  function sortTasksCompareFunction(a, b) {
    return new Date(a.taskDate) < new Date(b.taskDate) ? -1 : 1;
  }

  return (
    <div id="list-of-tasks">
      {tasks.sort(sortTasksCompareFunction).map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onChangePage={props.onChangePage}
          onChangeTask={props.onChangeTask}
        />
      ))}
    </div>
  );
}

export default ListOfTasks;
