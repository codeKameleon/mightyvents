import React, { Component } from 'react';
import AppRouter from '../AppRouter';
import { Provider } from 'react-redux';
import store from '../../store';
import styles from './styles.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.App}>
          <AppRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
