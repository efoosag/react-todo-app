import React, { useState, useEffect } from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

function TodosLogic() {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdateTitle = (updatetitle, id) => {
    setTodos((prevStste) => prevStste.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatetitle,
        };
      }
      return todo;
    }));
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
        setUpdateTitle={setUpdateTitle}
      />
    </div>
  );
}

export default TodosLogic;
