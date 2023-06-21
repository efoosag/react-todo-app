import React from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

function TodosLogic() {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} />
    </div>
  );
}

export default TodosLogic;
