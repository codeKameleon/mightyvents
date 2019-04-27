import { FETCH_EVENTS_MEETUP } from './types';
import axios from 'axios';

export const fetchMeetupEvents = () => dispatch => {
  axios({
    method: 'get',
    url:
      'https://cors-anywhere.herokuapp.com/https://api.meetup.com/self/events',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_MEETUP_TOKEN}`
    }
  })
    .then(events =>
      dispatch({
        type: FETCH_EVENTS_MEETUP,
        payload: events.data
      })
    )
    .catch(error => console.log(error));
};
