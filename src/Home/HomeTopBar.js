import "./HomeTopBar.css";
import HomeSearchButton from "./HomeSearchButton";
import SettingsButton from "./SettingsButton";

function HomeTopBar(props) {
  return (
    <div className="top-bar" id="home-top-bar">
      <div className="top-bar-content">
        <h1>Task Manager</h1>
        <div className="right-aligned">
          <HomeSearchButton onChangePage={props.onChangePage} />
          <SettingsButton onChangePage={props.onChangePage} />
        </div>
      </div>
    </div>
  );
}

export default HomeTopBar;
