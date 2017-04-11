import { combineReducers } from 'redux';
import MonsterReducer from './reducer_monsters';

const rootReducer = combineReducers({
  actors: MonsterReducer,
});

export default rootReducer;
