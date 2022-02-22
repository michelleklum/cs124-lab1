import "./CancelEditListButton.css";

function CancelEditListButton(props) {
    function handleCancel() {
        props.onChangeList(null)
        props.onChangePage("Home")
    }
    return (
        <div className="left-aligned">
            <i className="fas fa-times fa-5x cancel-edit-list"
                onClick={() => handleCancel()}></i>
        </div>
    );
}

export default CancelEditListButton;
