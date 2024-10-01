import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {Object.keys(tasks).map((date) => {
        const dateTasks = tasks[date];
        return (
          dateTasks.length > 0 && ( // Only render the date if there are tasks
            <div key={date}>
              <h2>{date}</h2>
              <ul>
                {dateTasks.map((task, id) => (
                  <li key={task.id}>
                    {task.text}
                    <button onClick={() => dispatch(deleteTask(date, id))}>
                      Delete
                    </button>
                    {/* You can add edit functionality here */}
                  </li>
                ))}
              </ul>
            </div>
          )
        );
      })}
    </div>
  );
};

export default TaskList;
