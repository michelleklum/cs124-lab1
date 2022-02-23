import HomeTopBar from "./HomeTopBar";
import ListOfLists from "./ListOfLists";
import AddButton from "../Global/AddButton";

function Home(props) {
  return (
    <div>
      <HomeTopBar
        onChangePage={props.onChangePage}
        onChangeList={props.onChangeList}
      />
      <ListOfLists
        data={props.data}
        onChangePage={props.onChangePage}
        onChangeList={props.onChangeList}
        onDeleteList={props.onDeleteList}
      />
      <AddButton
        onChangePage={props.onChangePage}
        currentPage={props.currentPage} />
    </div>
  );
}

export default Home;
