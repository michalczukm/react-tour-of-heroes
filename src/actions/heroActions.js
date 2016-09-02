import * as types from '../constants/ActionTypes';

export function changeName(id, newName) {
  return { type: types.CHANGE_NAME, id, newName };
}

export function selectHero(id) {
  return { type: types.SELECT_HERO, id };
}

export function addHero(name) {
  return { type: types.ADD_HERO, name };
}
//export other functions below as the application gets other behaviors...