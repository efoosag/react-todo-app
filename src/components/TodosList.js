import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todosProps, handleChange, deleteTodo }) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemTodo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}

    </ul>
  );
}

export default TodosList;
