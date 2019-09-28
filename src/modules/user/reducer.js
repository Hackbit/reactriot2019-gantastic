import * as types from './types';


export const name = 'user';

export const initialState = {
  id: null,
  isFetching: false,
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
