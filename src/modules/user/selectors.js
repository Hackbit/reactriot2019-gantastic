import { createSelector } from 'reselect';

import { name } from './reducer';


const getState = state => state[name];


export const getId = createSelector(
  [getState],
  state => state.id,
);

export const getIsAuth = createSelector(
  [getState],
  state => state.isAuthenticated,
);
