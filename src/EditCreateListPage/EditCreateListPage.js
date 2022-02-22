import React, { useState } from 'react'
import "./EditCreateListPage.css";
import EditListTopBar from "./EditListTopBar";
import ListIconOptions from "./ListIconOptions";

function EditCreateListPage(props) {
  /* TODO: when in create mode, task shouldn't be saved until user types something, etc. */
  const list = props.data.find((list) => list.id === props.currentListId);
  const [tempListName, setTempListName] = useState(list.listName || "");
  const [tempSelectedIcon, setTempSelectedIcon] = useState(list.listIcon || "");

  return (
    <div id="edit-list-page">
      <div className="edit-list-header top-bar">
        <EditListTopBar
          data={props.data}
          onChangePage={props.onChangePage}
          currentListId={props.currentListId}
          currentListName={list.listName}
          onEditList={props.onEditList}
          tempListName={tempListName} 
          tempSelectedIcon={tempSelectedIcon}
          onChangeListName={setTempListName}
          />
      </div>
      <ListIconOptions
        onChangeListIcon={setTempSelectedIcon}
        tempSelectedIcon={tempSelectedIcon}
        onEditList={props.onEditList}
        onChangePage={props.onChangePage}
      />
    </div>
  );
}

export default EditCreateListPage;
