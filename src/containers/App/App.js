import React, { PropTypes } from 'react';
import styles from './App.css';

const App = ({ children }) => (
  <div className={styles.base}>
    <header className={styles.header}>
      <h1>YARS</h1>
      <p>Yet Another React Starter</p>
    </header>
    <nav className={styles.nav}>
      <ul>
        <li>Todo</li>
        <li>Counter</li>
      </ul>
    </nav>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
