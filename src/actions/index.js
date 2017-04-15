import axios from 'axios';

const ROOT_URL = 'http://localhost:8888';

export const FETCH_MONSTERS = 'FETCH_MONSTERS';
export const MONSTER_SEARCH_KEYPRESS = 'MONSTER_SEARCH_KEYPRESS';
export const FETCH_ENCOUNTERS = 'FETCH_ENCOUNTERS';
export const FETCH_ENCOUNTER = 'FETCH_ENCOUNTER';

export function fetchMonsters(monstername) {
  const url = `${ROOT_URL}/monsters?name_like=${monstername}`;
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

export function fetchEncounters() {
  const url = `${ROOT_URL}/encounters`;
  const request = axios.get(url);
  return {
    type: FETCH_ENCOUNTERS,
    payload: request
  }
}

export function fetchEncounter(id) {
  const url = `${ROOT_URL}/encounters/${id}`;
  const request = axios.get(url);
  return {
    type: FETCH_ENCOUNTER,
    payload: request
  }
}
