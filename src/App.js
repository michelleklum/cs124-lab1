import React, { Fragment, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import HomeSearchPage from "./Home/HomeSearchPage";
import ListSearchPage from "./SingleListPage/ListSearchPage";
import SingleListPage from "./SingleListPage/SingleListPage";

function App(props) {
  const [data, setData] = useState(props.initialData);

  function handleEditList(listId, listField, newValue) {
    const oldListData = data.find((list) => list.id === listId);
    const oldDataWithoutEditedList = data.filter((list) => list.id !== listId);
    const newList = { ...oldListData, [listField]: newValue };
    setData([...oldDataWithoutEditedList, newList]);
  }

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
      {currentPage === "HomeSearchPage" ? (
        <HomeSearchPage
          data={data}
          currentPage={currentPage}
          currentList={currentList}
          currentTask={currentTask}
          onChangePage={handleChangePage}
          onChangeList={handleChangeList}
          onChangeTask={handleChangeTask}
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
          onEditList={handleEditList}
        />
      ) : null}
      {currentPage === "ListSearchPage" ? (
        <ListSearchPage
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
