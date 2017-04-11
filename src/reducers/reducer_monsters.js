import { FETCH_MONSTERS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MONSTERS:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
