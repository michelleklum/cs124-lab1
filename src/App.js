import React, { Fragment, useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import HomeSearchPage from "./HomeSearchPage/HomeSearchPage";
import ListSearchPage from "./ListSearchPage/ListSearchPage";
import SingleListPage from "./SingleListPage/SingleListPage";
import ViewEditCreateTaskPage from "./ViewEditCreateTaskPage/ViewEditCreateTaskPage";
import EditCreateListPage from "./EditCreateListPage/EditCreateListPage";


function App(props) {
  const [data, setData] = useState(props.initialData);

  function handleEditTask(listId, taskId, taskField, newValue) {
    const oldList = data.find((list) => list.id === listId);
    const oldDataWithoutEditedList = data.filter((list) => list.id !== listId);

    const oldTask = oldList.listTasks.find((task) => task.id === taskId);
    const oldTasksWithoutEditedTask = oldList.listTasks.filter(
      (task) => task.id !== taskId
    );

    const editedTask = { ...oldTask, [taskField]: newValue };
    const editedList = {
      ...oldList,
      listTasks: [...oldTasksWithoutEditedTask, editedTask],
    };

    setData([...oldDataWithoutEditedList, editedList]);
  }

  function handleEditList(listId, listField, newValue) {
    const oldList = data.find((list) => list.id === listId);
    const oldDataWithoutEditedList = data.filter((list) => list.id !== listId);
    const editedList = { ...oldList, [listField]: newValue };
    setData([...oldDataWithoutEditedList, editedList]);
  }

  function handleDeleteCompletedTasks(listId) {
    const oldList = data.find((list) => list.id === listId);
    const oldDataWithoutEditedList = data.filter((list) => list.id !== listId);
    const uncompletedListTasks = oldList.listTasks.filter(
      (task) => !task.isTaskCompleted
    );
    const editedList = { ...oldList, listTasks: uncompletedListTasks };
    setData([...oldDataWithoutEditedList, editedList]);
  }

  function handleDeleteAllTasks(listId) {
    const oldList = data.find((list) => list.id === listId);
    const oldDataWithoutEditedList = data.filter((list) => list.id !== listId);
    const editedList = { ...oldList, listTasks: [] };
    setData([...oldDataWithoutEditedList, editedList]);
  }

  function handleDeleteList(listId) {
    setData(data.filter((list) => list.id !== listId));
    setCurrentPage("Home"); /* after deleting list, redirect to Home Page */
  }

  const [currentPage, setCurrentPage] = useState("Home");
  const [currentListId, setCurrentListId] = useState();
  const [currentTaskId, setCurrentTaskId] = useState();

  function handleChangePage(newPage) {
    setCurrentPage(newPage);
  }

  function handleChangeList(newListId) {
    setCurrentListId(newListId);
  }

  function handleChangeTask(newTaskId) {
    setCurrentTaskId(newTaskId);
  }
  
  return (
    <Fragment>
      {currentPage === "Home" ? (
        <Home
          data={data}
          currentListId={currentListId}
          currentTaskId={currentTaskId}
          onDeleteList={handleDeleteList}
          onChangePage={handleChangePage}
          onChangeList={handleChangeList}
        />
      ) : null}
      {currentPage === "HomeSearchPage" ? (
        <HomeSearchPage
          data={data}
          currentListId={currentListId}
          currentTaskId={currentTaskId}
          onChangePage={handleChangePage}
          onChangeList={handleChangeList}
          onChangeTask={handleChangeTask}
        />
      ) : null}
      {currentPage === "SingleListPage" ? (
        <SingleListPage
          data={data}
          currentListId={currentListId}
          currentTaskId={currentTaskId}
          onChangePage={handleChangePage}
          onChangeTask={handleChangeTask}
          onEditList={handleEditList}
          onDeleteCompleted={handleDeleteCompletedTasks}
          onDeleteAllTasks={handleDeleteAllTasks}
          onDeleteList={handleDeleteList}
          onEditTask={handleEditTask}
        />
      ) : null}
      {currentPage === "ListSearchPage" ? (
        <ListSearchPage
          data={data}
          currentListId={currentListId}
          currentTaskId={currentTaskId}
          onChangePage={handleChangePage}
          onChangeTask={handleChangeTask}
          onEditTask={handleEditTask}
        />
      ) : null}
      {currentPage === "ViewTaskPage" ? (
        <ViewEditCreateTaskPage
          data={data}
          currentListId={currentListId}
          currentTaskId={currentTaskId}
          onChangePage={handleChangePage}
          onEditTask={handleEditTask}
          inEditTaskMode={false}
          inCreateTaskMode={false}
        />
      ) : null}
      {currentPage === "EditListPage" ? (
        <EditCreateListPage
          data={data}
          currentListId={currentListId}
          onEditList={handleEditList}
          onChangePage={handleChangePage}
          inEditListMode={false}
          inCreateListMode={false}
        />
      ) : null}
    </Fragment>
  );
}

export default App;
