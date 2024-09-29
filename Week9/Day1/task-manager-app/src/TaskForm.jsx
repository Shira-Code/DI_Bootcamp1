import React, { useState } from "react";
import { useTasks } from "./TaskContext";

function TaskForm() {
  const [taskText, setTaskText] = useState("");
  const { dispatch } = useTasks();

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch({ type: "ADD_TASK", text: taskText });
    setTaskText("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;
