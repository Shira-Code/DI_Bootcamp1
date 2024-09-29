import React from "react";
import { TaskProvider } from "./TaskContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import FilterButtons from "./FilterButtons";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
