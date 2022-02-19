import "./ListOfLists.css";
import ListCard from "./ListCard";

function ListOfLists(props) {
  function sortListsCompareFunction(a, b) {
    return a.listName < b.listName ? -1 : 1;
  }

  return (
    <div id="list-of-lists">
      {props.data.sort(sortListsCompareFunction).map((list) => (
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
