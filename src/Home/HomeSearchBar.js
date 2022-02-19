import "./HomeSearchBar.css";
import CancelSearch from "./CancelSearch";

function HomeSearchBar(props) {
  return (
    <div className="home-search-background">
      <div className="home-search">
        <i className="fas fa-search fa-3x"></i>
        <label htmlFor="search" className="search-label">Search</label>
        <input type="text" id="search" name="search" placeholder="Search" />
      </div>
      <CancelSearch onChangePage={props.onChangePage}/>
    </div>
  );
}

export default HomeSearchBar;
