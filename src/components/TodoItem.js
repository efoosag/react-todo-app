import React from 'react';

function TodoItem({ itemTodo, handleChange }) {
  return (

    <li>
      <input
        type="checkbox"
        checked={itemTodo.completed}
        onChange={() => handleChange(itemTodo.id)}
      />
      {itemTodo.title}
    </li>
  );
}

export default TodoItem;
