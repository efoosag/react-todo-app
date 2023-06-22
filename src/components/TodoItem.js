import React, { useState } from 'react';
import styles from './styles/TodoItem.module.css';

function TodoItem({
  itemTodo, handleChange, deleteTodo, setUpdateTitle,
}) {
  const [edit, setEdit] = useState(false);
  const viewMode = { };
  const editMode = { };

  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEdit(true);
  };
  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };
  return (

    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemTodo.completed}
          onChange={() => handleChange(itemTodo.id)}
        />
        <span className={itemTodo.completed ? styles.completedStyle : null}>{itemTodo.title}</span>
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => deleteTodo(itemTodo.id)}>delete</button>
      </div>
      <input
        type="text"
        value={itemTodo.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateTitle(e.target.value, itemTodo.id)}
        onKeyDown={handleUpdatedDone}

      />
    </li>
  );
}

export default TodoItem;
