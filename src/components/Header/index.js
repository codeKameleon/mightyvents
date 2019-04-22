import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles['Header']}>
        <nav className={styles['nav']}>
          <NavLink className={styles['home-link']} exact to="/">
            Mightyvents
          </NavLink>

          <ul className={styles['nav-items']}>
            <li className={styles['nav-item']}>
              <NavLink
                activeClassName={styles['nav-link-active']}
                className={styles['nav-link']}
                exact
                to="/"
              >
                Events
              </NavLink>
            </li>

            <li className={styles['nav-item']}>
              <NavLink
                activeClassName={styles['nav-link-active']}
                className={styles['nav-link']}
                to="/setup"
              >
                Setup
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
