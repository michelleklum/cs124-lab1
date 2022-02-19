import "./ListSearchPage.css";
import React, { Fragment, useState } from "react";
import SearchBar from "../Home/SearchBar";
import TaskCard from "./TaskCard";

const filterTasks = (tasks, query) => {
  if (!query) {
    return tasks;
  }
  return tasks.filter((task) => {
    const taskName = task.taskName.toLowerCase();
    return taskName.includes(query);
  });
};

function ListSearchPage(props) {
  const list = props.data.find((list) =>
    list.id === props.currentList)
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredTasks = filterTasks(list.listTasks, searchQuery);

  console.log(list)

  return (
    <Fragment>
      <SearchBar
        onChangePage={props.onChangePage}
        onChangeList={props.onChangeList}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div id="filtered-tasks">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onChangePage={props.onChangePage}
            onChangeTask={props.onChangeTask}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default ListSearchPage;
