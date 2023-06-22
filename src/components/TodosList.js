import React from 'react';
import TodoItem from './TodoItem';

function TodosList({
  todosProps, handleChange, deleteTodo, setUpdateTitle,
}) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemTodo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          setUpdateTitle={setUpdateTitle}
        />
      ))}

    </ul>
  );
}

export default TodosList;
