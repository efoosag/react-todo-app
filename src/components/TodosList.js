import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todosProps, handleChange }) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemTodo={todo} handleChange={handleChange} />
      ))}

    </ul>
  );
}

export default TodosList;
