import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/getFacebookEventsActions';
import styles from './styles.module.scss';

class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div className={styles['Events']}>
        <h1>Events</h1>
        {!events ? (
          <span>Loading events ...</span>
        ) : (
          <ul className={styles['events-list']}>
            {events.map(event => {
              return (
                <Link className={styles['event']} key={event.id} to="/">
                  <article>
                    <div className={styles['time']}>
                      <span>{event.start_time}</span>

                      <span> {event.start_time}</span>
                    </div>

                    <h2 className={styles['title']}>{event.name}</h2>
                  </article>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

//TO DO : concat fb & meetup events
const mapStateToProps = state => ({
  events: state.events.itemsFacebook
});

export default connect(
  mapStateToProps,
  { fetchEvents }
)(Events);
