import React, { useState } from "react";
import "./SingleListPage.css";
import ListTopBar from "./ListTopBar";
import ListOfTasks from "./ListOfTasks";

function SingleListPage(props) {
  const [inMenuMode, setMenuMode] = useState(false);

  function handleChangeMenuMode() {
    setMenuMode(!inMenuMode);
    console.log(inMenuMode);
  }

  return (
    <div id="single-list-page">
      <ListTopBar
        list={props.data.find((list) => list.id === props.currentList)}
        inMenuMode={inMenuMode}
        onChangePage={props.onChangePage}
        onChangeMenuMode={handleChangeMenuMode}
      />
      <ListOfTasks
        list={props.data.find((list) => list.id === props.currentList)}
        onChangePage={props.onChangePage}
        onChangeTask={props.onChangeTask}
      />
    </div>
  );
}

export default SingleListPage;
