import React, { useState } from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

function TodosLogic() {
  const [todos, setTodos] = useState([
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
  ]);

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
