import "./HomeTopBar.css";
import SearchButton from "./SearchButton";
import SettingsButton from "./SettingsButton";

function HomeTopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <h1>Task Manager</h1>
        <SearchButton />
        <SettingsButton />
      </div>
    </div>
  );
}

export default HomeTopBar;
