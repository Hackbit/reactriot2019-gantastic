import { createSelector } from 'reselect';

import { name } from './reducer';


const getState = state => state[name];


export const getHistory = createSelector(
  [getState],
  state => state.history,
);

export const getHistoryIds = createSelector(
  [getHistory],
  history => history.ids,
);

export const getHistoryById = createSelector(
  [getHistory],
  history => history.byId,
);

export const getHistoryIsFetching = createSelector(
  [getHistory],
  history => history.isFetching,
);

export const getCurrentResultPath = createSelector(
  [getState],
  state => state.currentResultPath,
);

export const getCurrentProgress = createSelector(
  [getState],
  state => state.currentProgress,
);
