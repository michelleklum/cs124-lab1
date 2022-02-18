import "./SingleListPage.css";
import ListTopBar from "./ListTopBar";
import ListOfTasks from "./ListOfTasks";

function SingleListPage(props) {
  return (
    <div id="single-list-page">
      <ListTopBar />
      <ListOfTasks
        list={props.data.find((list) => list.id === props.currentList)}
      />
    </div>
  );
}

export default SingleListPage;
