import React, { Fragment, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import SingleListPage from "./SingleListPage/SingleListPage";

function App(props) {
  const [data, setData] = useState(props.initialData);

  const [currentPage, setCurrentPage] = useState("Home");
  const [currentList, setCurrentList] = useState();
  const [currentTask, setCurrentTask] = useState();

  function handleChangePage(newPage) {
    setCurrentPage(newPage);
  }

  function handleChangeList(newList) {
    setCurrentList(newList);
  }

  function handleChangeTask(newTask) {
    setCurrentTask(newTask);
  }

  return (
    <Fragment>
      {currentPage === "Home" ? (
        <Home
          data={data}
          currentPage={currentPage}
          currentList={currentList}
          currentTask={currentTask}
          onChangePage={handleChangePage}
          onChangeList={handleChangeList}
        />
      ) : null}
      {currentPage === "SingleListPage" ? (
        <SingleListPage
          data={data}
          currentPage={currentPage}
          currentList={currentList}
          currentTask={currentTask}
          onChangePage={handleChangePage}
          onChangeTask={handleChangeTask}
        />
      ) : null}
    </Fragment>
  );
}

export default App;
