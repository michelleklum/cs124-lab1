import React, { Fragment, useState } from "react";
import { generateUniqueID } from "web-vitals/dist/modules/lib/generateUniqueID";
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
    setData(
      data.map((list) =>
        list.id === listId
          ? {
            ...list,
            listTasks: list.listTasks.map((task) =>
              task.id === taskId ? { ...task, [taskField]: newValue } : task
            ),
          }
          : list
      )
    );
  }

  function handleDeleteTask(listId, taskId) {
    setData(
      data.map((list) =>
        list.id === listId
          ? {
            ...list,
            listTasks: list.listTasks.filter((task) => task.id !== taskId),
          }
          : list
      )
    );
    setCurrentPage(
      "SingleListPage"
    ); /* after deleting task, redirect to Single List Page */
  }

  function handleEditList(listId, listField, newValue) {
    setData(
      data.map((list) =>
        list.id === listId ? { ...list, [listField]: newValue } : list
      )
    );
  }

  function handleEditListAppearance(listId, newName, newIcon) {
    setData(
      data.map((list) =>
        list.id === listId
          ? { ...list, listName: newName, listIcon: newIcon }
          : list
      )
    );
  }

  function handleDeleteCompletedTasks(listId) {
    setData(
      data.map((list) =>
        list.id === listId
          ? {
            ...list,
            listTasks: list.listTasks.filter((task) => !task.isTaskCompleted),
          }
          : list
      )
    );
  }

  function handleDeleteAllTasks(listId) {
    setData(
      data.map((list) =>
        list.id === listId ? { ...list, listTasks: [] } : list
      )
    );
  }

  function handleDeleteList(listId) {
    setData(data.filter((list) => list.id !== listId));
    setCurrentPage("Home"); /* after deleting list, redirect to Home Page */
  }


  // Code below changes current page, list, and task
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


  // Functions below handle list and task creation 
  function handleCreateList(listName, listIcon) {
    const newList = {
      id: generateUniqueID(),
      listName: listName,
      listIcon: listIcon,
      areCompletedTasksHidden: false,
      listTasks: [],
    }
    const newData = data.concat(newList)
    setData(newData)
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
          inEditTaskMode={false}
          inCreateTaskMode={false}
        />
      ) : null}
      {currentPage === "EditTaskPage" ? (
        <ViewEditCreateTaskPage
          data={data}
          currentListId={currentListId}
          currentTaskId={currentTaskId}
          onChangePage={handleChangePage}
          onEditData={setData}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          inEditTaskMode={true}
          inCreateTaskMode={false}
        />
      ) : null}
      {currentPage === "EditListPage" ? (
        <EditCreateListPage
          data={data}
          currentListId={currentListId}
          onEditList={handleEditListAppearance}
          onChangePage={handleChangePage}
          onChangeList={handleChangeList}
          onDeleteList={handleDeleteList}
          onCreateList={handleCreateList}
          inEditListMode={true}
          inCreateListMode={false}
        />
      ) : null}
      {currentPage === "CreateListPage" ? (
        <EditCreateListPage
          data={data}
          currentListId={currentListId}
          onEditList={handleEditListAppearance}
          onCreateList={handleCreateList}
          onChangeList={handleChangeList}
          onChangePage={handleChangePage}
          onDeleteList={handleDeleteList}
          inEditListMode={false}
          inCreateListMode={true}
        />
      ) : null}
    </Fragment>
  );
}

export default App;
