import React, { useState } from "react";
import "./AdditionalNotesEditor.css";

function AdditionalNotesEditor(props) {
  const [textareaRows, setTextareaRows] = useState(1);

  // Automatically resizes textarea according to its scrollHeight, if necessary,
  // in order to show all text
  function handleTextareaChange(e) {
    const rowHeight = 30;
    const textareaRowsRequired =
      Math.ceil(e.target.scrollHeight / rowHeight) - 1;

    if (textareaRowsRequired > textareaRows) {
      setTextareaRows(textareaRowsRequired);
    }
  }

  return (
    <div className="edit-task-notes">
      <textarea
        rows={textareaRows}
        onChange={handleTextareaChange}
        id="edit-task-notes"
        name="task-notes"
        maxLength="300"
        placeholder="Enter additional notes"
        autoComplete="off"
        defaultValue={props.tempTaskNotes}
        onInput={(e) => props.onChangeTaskNotes(e.target.value)}
      ></textarea>
    </div>
  );
}

export default AdditionalNotesEditor;
