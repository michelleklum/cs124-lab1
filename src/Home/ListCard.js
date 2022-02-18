import React, { Fragment, useState } from "react";
import "./ListCard.css";
import EnterListArrow from "./EnterListArrow";
import EditListButton from "./EditListButton";
import DeleteListButton from "./DeleteListButton";

function ListCard(props) {
  const [inEditMode, setEditMode] = useState(false);

  function toggleEditMode() {
    setEditMode(!inEditMode);
  }

  let gridClassName = inEditMode ? "edit-list-grid" : "list-grid";

  return (
    <div
      className={["list", gridClassName].join(" ")}
      onClick={(e) => props.onChangePage("SingleListPage")}
    >
      <i className={`fas fa-${props.listIcon} fa-4x list-icon`}></i>
      <h2>{props.listName}</h2>
      {inEditMode ? (
        <Fragment>
          <EditListButton onListIconClick={toggleEditMode} />
          <DeleteListButton onListIconClick={toggleEditMode} />
        </Fragment>
      ) : (
        <EnterListArrow onListIconClick={toggleEditMode} />
      )}
    </div>
  );
}

export default ListCard;
