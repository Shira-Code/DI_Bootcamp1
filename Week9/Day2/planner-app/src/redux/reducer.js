import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { date, task } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [date]: [...(state.tasks[date] || []), task],
        },
      };

    case EDIT_TASK:
      const { taskId, updatedTask } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.date]: state.tasks[action.payload.date].map((t, id) =>
            id === taskId ? updatedTask : t
          ),
        },
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.date]: state.tasks[action.payload.date].filter(
            (_, id) => id !== action.payload.taskId
          ),
        },
      };

    default:
      return state;
  }
};

export default reducer;
