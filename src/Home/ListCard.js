import React, { Fragment, useState } from "react";
import "./ListCard.css";
import EnterListArrow from "./EnterListArrow";
import EditListButton from "./EditListButton";
import DeleteListButton from "./DeleteListButton";

function ListCard(props) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [inEditMode, setEditMode] = useState(false);

  /* The three functions below handle user swiping left or right on ListCard to reveal / hide edit and delete icons */
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 75 && touchEnd !== 0 && !inEditMode) {
      toggleEditMode();
    }
    if (touchStart - touchEnd < -75 && touchEnd !== 0 && inEditMode) {
      toggleEditMode();
    }
  }

  function toggleEditMode() {
    setEditMode(!inEditMode);
  }

  function handleListCardClick() {
    if (!inEditMode) {
      props.onChangePage("SingleListPage");
      props.onChangeList(props.id);
    }
  }

  let gridClassName = inEditMode ? "edit-list-grid" : "list-grid";

  return (
    <div
      className={["list", gridClassName].join(" ")}
      onClick={handleListCardClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <i className={`fas fa-${props.listIcon} fa-4x list-icon`}></i>
      <h2>{props.listName}</h2>
      {inEditMode ? (
        <Fragment>
          <EditListButton
            onChangePage={props.onChangePage}
            id={props.id}
            onChangeList={props.onChangeList} />
          <DeleteListButton onDeleteList={props.onDeleteList} id={props.id} />
        </Fragment>
      ) : (
        <EnterListArrow onListIconClick={toggleEditMode} />
      )}
    </div>
  );
}

export default ListCard;
