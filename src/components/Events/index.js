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
    const facebookStyle = { borderColor: '#4267b2' };
    const meetupStyle = { borderColor: '#f64060' };

    return (
      <div className={styles['Events']}>
        <h1 className={styles['main-title']}>My Events</h1>

        {/* Facebook events */}
        {!facebookEvents ? (
          <span>Loading events ...</span>
        ) : (
          <React.Fragment>
            <ul className={styles['events-list']}>
              {facebookEvents.map(event => {
                return (
                  <li
                    className={styles['event']}
                    style={facebookStyle}
                    key={event.id}
                  >
                    <Link className={styles['event-link']} to="/">
                      <article>
                        <div className={styles['date']}>
                          <span className={styles['day']}>
                            {moment(event.start_time).format('DD MMM')}
                          </span>

                          <span className={styles['time']}>
                            {moment(event.start_time).format('HH:mm')}
                          </span>
                        </div>

                        <h2 className={styles['title']}>{event.name}</h2>
                      </article>
                    </Link>
                  </li>
                );
              })}

              {/* Meetup events */}

              {meetupEvents.map(event => {
                return (
                  <li
                    className={styles['event']}
                    style={meetupStyle}
                    key={event.id}
                  >
                    <Link className={styles['event-link']} to="/">
                      <article>
                        <div className={styles['date']}>
                          <span className={styles['day']}>
                            {moment(event.local_date).format('DD MMM')}
                          </span>

                          <span className={styles['time']}>
                            {moment(event.time).format('HH:mm')}
                          </span>
                        </div>

                        <h2 className={styles['title']}>{event.name}</h2>
                      </article>
                    </Link>
                  </li>
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
