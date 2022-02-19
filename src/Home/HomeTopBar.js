import "./HomeTopBar.css";
import HomeSearchButton from "./HomeSearchButton";
import SettingsButton from "./SettingsButton";

function HomeTopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <h1>Task Manager</h1>
        <HomeSearchButton />
        <SettingsButton />
      </div>
    </div>
  );
}

export default HomeTopBar;
