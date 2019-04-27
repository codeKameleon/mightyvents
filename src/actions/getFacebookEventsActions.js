import { FETCH_EVENTS_FACEBOOK } from './types';
import axios from 'axios';

export const fetchFacebookEvents = () => dispatch => {
  axios({
    method: 'get',
    url: `https://graph.facebook.com/me/events?access_token=${
      process.env.REACT_APP_FACEBOOK_TOKEN
    }`
  })
    .then(events =>
      dispatch({
        type: FETCH_EVENTS_FACEBOOK,
        payload: events.data.data
      })
    )
    .catch(error => console.log(error));
};
