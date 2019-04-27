import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFacebookEvents } from '../../actions/getFacebookEventsActions';
import { fetchMeetupEvents } from '../../actions/getMeetupEventsActions';
import moment from 'moment';
import styles from './styles.module.scss';

class Events extends Component {
  componentDidMount() {
    this.props.fetchFacebookEvents();
    this.props.fetchMeetupEvents();
  }

  render() {
    const { facebookEvents, meetupEvents } = this.props;
    console.log(facebookEvents);
    console.log(meetupEvents);
    return (
      <div className={styles['Events']}>
        <h1>Events</h1>

        {/* Facebook events */}
        {!facebookEvents ? (
          <span>Loading events ...</span>
        ) : (
          <React.Fragment>
            <h2> Facebook </h2>

            <ul className={styles['events-list']}>
              {facebookEvents.map(event => {
                return (
                  <Link className={styles['event']} key={event.id} to="/">
                    <article>
                      <div className={styles['time']}>
                        <span>{moment(event.start_time).format('DD MMM')}</span>

                        <span>{moment(event.start_time).format('HH:mm')}</span>
                      </div>

                      <h2 className={styles['title']}>{event.name}</h2>
                    </article>
                  </Link>
                );
              })}
            </ul>
          </React.Fragment>
        )}

        {/* Meetup events */}
        {!meetupEvents ? (
          <span>Loading events ...</span>
        ) : (
          <React.Fragment>
            <h2> Meetup </h2>

            <ul className={styles['events-list']}>
              {meetupEvents.map(event => {
                return (
                  <Link className={styles['event']} key={event.id} to="/">
                    <article>
                      <div className={styles['time']}>
                        <span>{moment(event.local_date).format('DD MMM')}</span>

                        <span>{moment(event.time).format('HH:mm')}</span>
                      </div>

                      <h2 className={styles['title']}>{event.name}</h2>
                    </article>
                  </Link>
                );
              })}
            </ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}

//TO DO : concat fb & meetup events
const mapStateToProps = state => ({
  facebookEvents: state.events.itemsFacebook,
  meetupEvents: state.events.itemsMeetup
});

export default connect(
  mapStateToProps,
  { fetchFacebookEvents, fetchMeetupEvents }
)(Events);
