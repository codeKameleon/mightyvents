import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

class Header extends Component {
  render() {
    const { location } = this.props;

    if (location.pathname === '/') return null;

    return (
      <header className={styles['Header']}>
        <nav className={styles['nav']}>
          <NavLink className={styles['nav-link']} to="/events">
            Mightyvents
          </NavLink>

          <ul className={styles['nav-items']}>
            <li className={styles['nav-item']}>
              <NavLink className={styles['nav-link']} exact to="/">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
