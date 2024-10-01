import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const Calendar = () => {
  const dispatch = useDispatch();
  const [date, setDate] = React.useState('');
  const [task, setTask] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(date, { id: Date.now(), text: task }));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Calendar;
