import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink exact to="/">
            Mightyvents
          </NavLink>

          <ul>
            <li>
              <NavLink exact to="/">
                Events
              </NavLink>
            </li>

            <li>
              <NavLink to="/setup">Setup</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
