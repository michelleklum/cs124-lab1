import "./ListTopBar.css";

function ListTopBar(props) {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="left-aligned">
          <i className="fas fa-chevron-left fa-4x"></i>
          <h2>Calls and Texts</h2>
        </div>
        <i className="fas fa-ellipsis-h fa-4x right-aligned"></i>
      </div>
    </div>
  );
}

export default ListTopBar;
