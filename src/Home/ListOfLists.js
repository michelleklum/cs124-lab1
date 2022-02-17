import './ListOfLists.css';
import ListCard from './ListCard'; 

function ListOfLists(props) {
    return <div id="list-of-lists">
      {props.initialData.map(list => <ListCard key={list.id} id={list.id} listName={list.listName} listIcon={list.listIcon} listTasks={list.listTasks}/>)}
  </div>
}

export default ListOfLists;
