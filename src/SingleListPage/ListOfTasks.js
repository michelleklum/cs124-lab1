import "./ListOfTasks.css";
import TaskCard from "./TaskCard";

function ListOfTasks(props) {
  return (
    <div id="list-of-tasks">
      {props.list.listTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          taskName={task.taskName}
          taskDate={task.taskDate}
          taskTime={task.taskTime}
          onChangePage={props.onChangePage}
          onChangeTask={props.onChangeTask}
        />
      ))}
    </div>
  );
}

export default ListOfTasks;
