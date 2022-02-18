import "./ListOfTasks.css";
import TaskCard from "./TaskCard";

function ListOfTasks(props) {
  console.log(props.list);
  return (
    <div id="list-of-tasks">
      {props.list.listTasks.map((task) => (
        <TaskCard key={task.id} id={task.id} taskName={task.taskName} />
      ))}
    </div>
  );
}

export default ListOfTasks;
