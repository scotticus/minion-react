import { FETCH_ENCOUNTERS, FETCH_ENCOUNTER_DETAIL } from '../actions/index';

const initialState = {
  all: [],
  encounter: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ENCOUNTERS:
      return {...state, all: action.payload.data};
    case FETCH_ENCOUNTER_DETAIL:
      return {...state, encounter: action.payload.data};
    default:
      return state;
  }
}
