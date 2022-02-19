import "./ListOfLists.css";
import ListCard from "./ListCard";

function ListOfLists(props) {
  return (
    <div id="list-of-lists">
      {props.data.map((list) => (
        <ListCard
          key={list.id}
          id={list.id}
          listName={list.listName}
          listIcon={list.listIcon}
          onChangePage={props.onChangePage}
          onChangeList={props.onChangeList}
        />
      ))}
    </div>
  );
}

export default ListOfLists;
