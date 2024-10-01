import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onRemove={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
