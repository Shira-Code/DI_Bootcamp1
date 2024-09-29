import React, { useRef, useState } from "react";
import { useTasks } from "./TaskContext";

function TaskList() {
  const { state, dispatch } = useTasks();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const editRef = useRef(null);

  const handleEditTask = (id) => {
    const newText = editRef.current.value;
    dispatch({ type: "EDIT_TASK", id, text: newText });
    setEditingTaskId(null);
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "active") return !task.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <>
              <input ref={editRef} defaultValue={task.text} />
              <button onClick={() => handleEditTask(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
                onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}
              >
                {task.text}
              </span>
              <button onClick={() => setEditingTaskId(task.id)}>Edit</button>
              <button onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
                Remove
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
