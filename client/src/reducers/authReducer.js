import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //return false insted of empty object in case no user is logged in
      return action.payload || false;
    default:
      return state;
  }
}
