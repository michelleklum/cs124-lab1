import "./ListTopBar.css";
import BackButton from "./BackButton";
import ListSearchButton from "./ListSearchButton";
import ListMenuButton from "./ListMenuButton";

function ListTopBar(props) {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="left-aligned">
          <BackButton onChangePage={props.onChangePage} />
          <h2>{props.list.listName}</h2>
        </div>
        <div className="right-aligned">
          {props.inMenuMode ? null :
            <ListSearchButton onChangePage={props.onChangePage} />}
          <ListMenuButton onChangeMenuMode={props.onChangeMenuMode} />
        </div>
      </div>
    </div>
  );
}

export default ListTopBar;
