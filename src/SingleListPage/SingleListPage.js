import React, { Fragment, useState } from "react";
import "./SingleListPage.css";
import ListTopBar from "./ListTopBar";
import ListOfTasks from "./ListOfTasks";
import ListMenu from "./ListMenu";
import AddButton from "../Global/AddButton";

function SingleListPage(props) {
  const [inMenuMode, setMenuMode] = useState(false);

  function toggleMenuMode() {
    setMenuMode(!inMenuMode);
  }

  return (
    <Fragment>
      <div id="single-list-page">
        <ListTopBar
          data={props.data}
          currentListId={props.currentListId}
          inMenuMode={inMenuMode}
          onChangePage={props.onChangePage}
          onChangeList={props.onChangeList}
          onChangeMenuMode={toggleMenuMode}
        />
        <AddButton
          currentPage={props.currentPage}
          onChangePage={props.onChangePage} />
        <div
          id={inMenuMode ? "single-list-menu-mode-overlay" : null}
          onClick={inMenuMode ? toggleMenuMode : null}
        >
          <ListOfTasks
            data={props.data}
            currentListId={props.currentListId}
            inMenuMode={inMenuMode}
            onChangePage={props.onChangePage}
            onChangeTask={props.onChangeTask}
            onEditTask={props.onEditTask}
          />
        </div>
      </div>
      {inMenuMode ? (
        <ListMenu
          data={props.data}
          currentListId={props.currentListId}
          onEditList={props.onEditList}
          onDeleteCompleted={props.onDeleteCompleted}
          onDeleteAllTasks={props.onDeleteAllTasks}
          onDeleteList={props.onDeleteList}
          onChangePage={props.onChangePage}
        />
      ) : null}
    </Fragment>
  );
}

export default SingleListPage;
