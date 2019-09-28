import * as types from './types';


export const name = 'faces';

export const initialState = {
  isFetching: false,
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
      };

    case types.FACES_MERGE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
