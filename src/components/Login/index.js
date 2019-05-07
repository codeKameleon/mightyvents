import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
import styles from './styles.module.scss';

export default class Login extends Component {
  render() {
    return (
      <div className={styles['wrapper']}>
        <div className={styles['sign']}>
          <header className={styles['header']}>
            <h1 className={styles['title']}>Mightyvents</h1>
            <p>All your events in one place</p>
          </header>

          <OauthSender
            authorizeUrl="https://facebook.com/dialog/oauth"
            clientId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
            redirectUri="http://localhost:3000/events"
            state={{ from: 'http://localhost:3000/' }}
            render={({ url }) => (
              <a className={styles['btn-login']} href={url}>
                Sign up with Facebook
              </a>
            )}
          />

          <OauthSender
            authorizeUrl="https://secure.meetup.com/oauth2/authorize"
            clientId={process.env.REACT_APP_MEETUP_CLIENT_ID}
            redirectUri="http://127.0.0.1:3000/events"
            state={{ from: 'http://127.0.0.1:3000' }}
            render={({ url }) => (
              <a className={styles['btn-login']} href={url}>
                Sign up with Meetup
              </a>
            )}
          />
        </div>
        <div className={styles['background']} />
      </div>
    );
  }
}
