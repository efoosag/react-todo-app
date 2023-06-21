import React, { useState } from 'react';

function InputTodo({ addTodoItem }) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Task" value={title} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputTodo;
