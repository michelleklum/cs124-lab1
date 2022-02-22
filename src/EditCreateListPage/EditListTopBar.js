import React, { useState } from 'react'
import CancelEditListButton from "./CancelEditListButton"
import ConfirmEditListButton from './ConfirmEditListButton';
import "./EditListTopBar.css";

function EditListTopBar(props) {
    const [tempListName, setTempListName] = useState(props.currentListName || "");

    return (
        <div className="edit-list-header top-bar">
            <div className="edit-list-header-content top-bar-content">
                <CancelEditListButton onChangePage={props.onChangePage} />
                <div className="list-name">
                    <label htmlFor="edit-list-name"
                        className="edit-list-name-label">List Name</label>
                    <input
                        type="text"
                        id="edit-list-name"
                        name="edit-list-name"
                        autoComplete="off"
                        value={tempListName}
                        onInput={e => setTempListName(e.target.value)}
                    />
                </div>
                <ConfirmEditListButton
                    data={props.data}
                    currentListId={props.currentListId}
                    onChangePage={props.onChangePage}
                    onEditList={props.onEditList}
                    listName={tempListName} />
            </div>
        </div>
    )
}

export default EditListTopBar