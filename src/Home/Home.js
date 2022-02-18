import HomeTopBar from "./HomeTopBar";
import ListOfLists from "./ListOfLists";

function Home(props) {
  return (
    <div>
      <HomeTopBar />
      <ListOfLists
        initialData={props.initialData}
        onChangePage={props.onChangePage}
      />
    </div>
  );
}

export default Home;
