import "./ListCard.css";
import EnterListArrow from "./EnterListArrow";

function ListCard(props) {
  return (
    <div className="list">
      <i className={`fas fa-${props.listIcon} fa-4x list-icon`}></i>
      <h2>{props.listName}</h2>
      <EnterListArrow />
    </div>
  );
}

export default ListCard;
