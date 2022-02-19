import React, { Fragment, useState } from "react";
import "./SingleListPage.css";
import ListTopBar from "./ListTopBar";
import ListOfTasks from "./ListOfTasks";
import ListMenu from "./ListMenu";
import AddButton from "../Home/AddButton";

function SingleListPage(props) {
  const [inMenuMode, setMenuMode] = useState(false);

  function handleChangeMenuMode() {
    setMenuMode(!inMenuMode);
  }

  const taskList = props.data.find((list) => list.id === props.currentList);

  return (
    <Fragment>
      <div id="single-list-page">
        <ListTopBar
          list={taskList}
          inMenuMode={inMenuMode}
          onChangePage={props.onChangePage}
          onChangeMenuMode={handleChangeMenuMode}
        />
        <AddButton />
        <div id={inMenuMode ? "single-list-menu-mode-overlay" : null}>
          <ListOfTasks
            list={taskList}
            onChangePage={props.onChangePage}
            onChangeTask={props.onChangeTask}
          />
        </div>
      </div>
      {inMenuMode ? (
        <ListMenu
          areCompletedTasksHidden={taskList.areCompletedTasksHidden}
          currentList={props.currentList}
          onEditList={props.onEditList}
        />
      ) : null}
    </Fragment>
  );
}

export default SingleListPage;
