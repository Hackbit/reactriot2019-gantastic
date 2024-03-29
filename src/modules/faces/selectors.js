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

export const getOpId = createSelector(
  [getState],
  state => state.currentOperationId,
);

export const getResultImageUrl = createSelector(
  [getState],
  state => state.resultImageUrl,
);

export const getCurrentResultCallback = createSelector(
  [getState],
  state => state.currentResultCallback,
);

export const getIsFetching = createSelector(
  [getState],
  state => state.isFetching,
);

export const getIsGenerating = createSelector(
  [getState],
  state => state.isGenerating,
);

export const getIsRetrieving = createSelector(
  [getState],
  state => state.isRetrieving,
);

export const getModalIsOpen = createSelector(
  [getState],
  state => state.modalIsOpen,
);
