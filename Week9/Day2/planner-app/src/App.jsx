import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
//import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Daily Planner</h1>
        <Calendar />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
