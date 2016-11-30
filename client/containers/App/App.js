import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import styles from './App.css';

import Navigation from 'components/Navigation';

const App = ({ children }) => (
  <div className={styles.base}>
    <Helmet titleTemplate={`%s - Duff Boods`} />
    <Navigation />
    <div className={styles.example}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
