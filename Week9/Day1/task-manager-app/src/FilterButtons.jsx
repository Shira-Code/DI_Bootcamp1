import React from "react";
import { useTasks } from "./TaskContext";

function FilterButtons() {
  const { dispatch } = useTasks();

  return (
    <div>
      <button onClick={() => dispatch({ type: "SET_FILTER", filter: "all" })}>All</button>
      <button onClick={() => dispatch({ type: "SET_FILTER", filter: "completed" })}>Completed</button>
      <button onClick={() => dispatch({ type: "SET_FILTER", filter: "active" })}>Active</button>
    </div>
  );
}

export default FilterButtons;
