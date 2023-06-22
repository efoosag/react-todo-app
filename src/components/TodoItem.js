import React from 'react';
import styles from './styles/TodoItem.module.css';

function TodoItem({ itemTodo, handleChange, deleteTodo }) {
  return (

    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemTodo.completed}
          onChange={() => handleChange(itemTodo.id)}
        />
        <span className={itemTodo.completed ? styles.completedStyle : null}>{itemTodo.title}</span>
        <button type="button" onClick={() => deleteTodo(itemTodo.id)}>delete</button>
      </div>

    </li>
  );
}

export default TodoItem;
