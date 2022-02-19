import "./ListOfTasks.css";
import TaskCard from "./TaskCard";

function ListOfTasks(props) {
  const tasks = props.list.areCompletedTasksHidden
    ? props.list.listTasks.filter((task) => task.isTaskCompleted === false)
    : props.list.listTasks;

  return (
    <div id="list-of-tasks">
      {tasks.map((task) => (
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
