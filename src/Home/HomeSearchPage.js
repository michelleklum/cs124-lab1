import HomeSearchBar from "./HomeSearchBar";

function HomeSearchPage(props) {
  return (
    <div id="home-search-bar">
      <HomeSearchBar
        onChangePage={props.onChangePage}
        onChangeList={props.onChangeList}
      />
    </div>
  );
}

export default HomeSearchPage;
