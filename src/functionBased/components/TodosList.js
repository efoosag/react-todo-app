/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
