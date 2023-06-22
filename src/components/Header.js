import React from 'react';
import styles from './styles/Header.module.css';

function Header() {
  return (
    <header className={styles.headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
}

export default Header;
