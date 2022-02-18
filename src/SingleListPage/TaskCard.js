import "./TaskCard.css";

function TaskCard(props) {
  return (
    <div className="task">
      <div className="left-aligned">
        <input type="checkbox" id="call-mom" name="call-mom-done" />
        <div className="task-and-date">
          <label htmlFor="call-mom">
            <h2>Call Mom</h2>
          </label>
          <p className="date">2/11/22, 5:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
