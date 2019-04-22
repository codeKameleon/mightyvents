import React, { Component } from 'react';
import AppRouter from '../AppRouter';
import styles from './styles.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <AppRouter />
      </div>
    );
  }
}

export default App;
