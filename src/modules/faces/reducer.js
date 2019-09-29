import * as types from './types';


export const name = 'faces';

export const initialState = {
  history: {
    byId: {},
    ids: [],
    isFetching: false,
  },
  isFetching: false,
  isGenerating: false,
  currentOperationId: null,
  currentProgress: 0,
  currentProgressCallback: null,
  currentResultCallback: null,
  currentResultPath: null,
  resultImageUrl: null,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FACES_MERGE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FACES_MERGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isGenerating: false,
        currentOperationId: action.payload.id,
        currentProgressCallback: action.payload.progressCallback,
        currentResultCallback: action.payload.resultCallback,
        currentResultPath: action.payload.resultPath,
        resultImageUrl: action.payload.resultImageUrl,
      };

    case types.FACES_MERGE_FAILURE:
      return initialState;

    case types.FACES_MERGE_PROGRESS:
      return {
        ...state,
        isGenerating: action.payload.progress < 100,
        currentProgress: action.payload.progress,
      };

    case types.FACES_SAVE_CONFIGS_REQUEST:
      return {
        ...state,
        history: {
          ...state.history,
          isFetching: true,
        },
      };

    case types.FACES_SAVE_CONFIGS_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          isFetching: false,
        },
      };

    case types.FACES_SAVE_CONFIGS_FAILURE:
      return {
        ...state,
        history: {
          ...state.history,
          isFetching: false,
        },
      };

    case types.FACES_GET_HISTORY_REQUEST:
      return {
        ...state,
        history: {
          ...state.history,
          isFetching: true,
        },
      };

    case types.FACES_GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          byId: action.payload.byId,
          ids: action.payload.ids,
          isFetching: false,
        },
      };

    case types.FACES_GET_HISTORY_FAILURE:
      return {
        ...state,
        history: {
          ...state.history,
          isFetching: false,
        },
      };

    default:
      return state;
  }
};
