import { FETCH_MONSTERS } from '../actions/index';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MONSTERS:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
