import "./ConfirmEditListButton.css";

function ConfirmEditListButton(props) {
    function confirmEdit() {
        props.onEditList(props.currentListId,
            'listName',
            props.listName)
        props.onChangePage("Home")
    }

    console.log(props.currentListId)
    return (
        <div className="right-aligned">
            <i className="fas fa-check fa-4x"
                onClick={() => confirmEdit()}></i>
        </div>
    );
}

export default ConfirmEditListButton;
