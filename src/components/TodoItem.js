import React from 'react';

function TodoItem({ itemTodo }) {
  return (
    <li>{itemTodo.title}</li>
  );
}

export default TodoItem;
