import React from 'react';

function TodoItem({ itemTodo, handleChange, deleteTodo }) {
  return (

    <li>
      <input
        type="checkbox"
        checked={itemTodo.completed}
        onChange={() => handleChange(itemTodo.id)}
      />
      {itemTodo.title}
      <button type="button" onClick={() => deleteTodo(itemTodo.id)}>delete</button>
    </li>
  );
}

export default TodoItem;
