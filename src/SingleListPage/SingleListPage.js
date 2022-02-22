import React, { Fragment, useState } from "react";
import "./SingleListPage.css";
import ListTopBar from "./ListTopBar";
import ListOfTasks from "./ListOfTasks";
import ListMenu from "./ListMenu";
import AddButton from "../Home/AddButton";

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
          onChangeMenuMode={toggleMenuMode}
        />
        <AddButton />
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
        />
      ) : null}
    </Fragment>
  );
}

export default SingleListPage;
