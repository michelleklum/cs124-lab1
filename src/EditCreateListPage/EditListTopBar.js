import CancelEditListButton from "./CancelEditListButton"
import "./EditListTopBar.css";

function EditListTopBar(props) {
    return (
        <div className="edit-list-header top-bar">
            <div className="edit-list-header-content top-bar-content">
                <CancelEditListButton onChangePage={props.onChangePage} />
                <div className="list-name">
                    {/* <label htmlFor="edit-list-name"
                        className="edit-list-name-label">List Name</label>
                    <input type="text"
                        id="edit-list-name"
                        name="edit-list-name"
                        value="Homework"
                        style="text-align:center;" /> */}
                </div>
                <div className="right-aligned">
                    <i className="fas fa-check fa-4x"></i>
                </div>
            </div>
        </div>
    )
}

export default EditListTopBar