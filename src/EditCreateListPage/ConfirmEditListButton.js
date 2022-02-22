function ConfirmEditListButton(props) {
    function confirmEdit() {
        props.onEditList(props.currentListId,
            props.listName,
            props.listIcon)
        props.onChangeList(null)
        props.onChangePage("Home")
    }

    function confirmCreateList() {
        props.onCreateList(props.listName,
            props.listIcon)
        props.onChangeList(null)
        props.onChangePage("Home")
    }

    var confirmListButton;
    if (props.inEditListMode) {
        confirmListButton =
            <div className="right-aligned">
                <i className="fas fa-check fa-4x"
                    onClick={() => confirmEdit()}></i>
            </div>
    }
    else if (props.inCreateListMode && props.listName !== "" && props.iconName !== "") {
        confirmListButton =
            <div className="right-aligned create-mode-confirm">
                <i className="fas fa-check fa-4x"
                    onClick={() => confirmCreateList()}></i>
            </div>
    }
    else {
        confirmListButton =
            <div className="right-aligned">
                <i className="fas fa-check fa-4x" id="no-info"></i>
            </div>
    }

    return (
        confirmListButton
    )
}

export default ConfirmEditListButton;
