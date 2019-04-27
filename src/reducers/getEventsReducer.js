import { FETCH_EVENTS_FACEBOOK, FETCH_EVENTS_MEETUP } from '../actions/types';

const initialState = {
  itemsFacebook: [],
  itemsMeetup: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_FACEBOOK:
      return {
        ...state,
        itemsFacebook: action.payload.map(item => {
          item.serviceProvider = 'FB';
          return item;
        })
      };
    case FETCH_EVENTS_MEETUP:
      return {
        ...state,
        itemsMeetup: action.payload.map(item => {
          item.serviceProvider = 'MU';
          return item;
        })
      };
    default:
      return state;
  }
}
