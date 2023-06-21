import React from 'react';
import TodoItem from './TodoItem';

function TodosList(props) {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemTodo={todo} />
      ))}

    </ul>
  );
}

export default TodosList;
