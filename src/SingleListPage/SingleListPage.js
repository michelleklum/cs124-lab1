import "./SingleListPage.css";

function SingleListPage(props) {
  return (
    <i
      className="fas fa-pencil-alt fa-4x edit-list"
      onClick={props.onListIconClick}
    ></i>
  );
}

export default SingleListPage;
