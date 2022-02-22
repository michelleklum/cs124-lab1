import HomeTopBar from "./HomeTopBar";
import ListOfLists from "./ListOfLists";
import AddButton from "./AddButton";

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
        onChangePage={props.onChangePage} />
    </div>
  );
}

export default Home;
