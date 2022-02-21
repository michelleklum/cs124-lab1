function CancelEditListButton(props) {
    return (
        <div className="left-aligned">
            <i className="fas fa-times fa-5x"
                onClick={() => props.onChangePage("Home")}></i>
        </div>
    );
}

export default CancelEditListButton;
