// src/components/Task.js

import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions">
        {state !== "TASK_ARCHIVED" && (
          <div>
            <span className={`icon-star`} />
          </div>
        )}
      </div>
    </div>
  );
}
