import { combineReducers } from 'redux';
import MonsterReducer from './reducer_monsters';
import EncounterReducer from './reducer_encounters';

const rootReducer = combineReducers({
  encounters: EncounterReducer,
  actors: MonsterReducer
});

export default rootReducer;
