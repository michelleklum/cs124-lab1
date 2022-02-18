import HomeTopBar from "./HomeTopBar";
import ListOfLists from "./ListOfLists";

function Home(props) {
  return (
    <div>
      <HomeTopBar />
      <ListOfLists
        data={props.data}
        onChangePage={props.onChangePage}
        onChangeList={props.onChangeList}
      />
    </div>
  );
}

export default Home;
