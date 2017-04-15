import { FETCH_ENCOUNTERS, FETCH_ENCOUNTER } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  encounter: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ENCOUNTERS:
      return { ...state, all: action.payload.data };
    case FETCH_ENCOUNTER:
      return { ...state, encounter: action.payload.data };
    default:
      return state;
  }
}
