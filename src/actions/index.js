import axios from 'axios';

export const FETCH_MONSTERS = 'FETCH_MONSTERS';
export const MONSTER_SEARCH_KEYPRESS = 'MONSTER_SEARCH_KEYPRESS';

export function fetchMonsters(monstername) {
  const url = `http://localhost:8888/monsters?name_like=${monstername}`;
  const request = axios.get(url);
  return {
    type: FETCH_MONSTERS,
    payload: request,
  };
}

export function monsterSearchKeyPress(term) {
  return {
    type: MONSTER_SEARCH_KEYPRESS,
    paylod: term
  }
}
