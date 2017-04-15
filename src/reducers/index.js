import { combineReducers } from 'redux';
import MonsterReducer from './reducer_monsters';
import EncounterReducer from './reducer_encounters';

const rootReducer = combineReducers({
  actors: MonsterReducer,
  encounters: EncounterReducer
});

export default rootReducer;
