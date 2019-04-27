import { FECTH_EVENTS_FACEBOOK } from '../actions/types';

const initialState = {
  itemsFacebook: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // fetch events facebook
    case FECTH_EVENTS_FACEBOOK:
      return {
        ...state,
        itemsFacebook: action.payload.map(item => {
          item.serviceProvider = 'FB';
          return item;
        })
      };
    // TO DO : fetch events meetup
    default:
      return state;
  }
}
