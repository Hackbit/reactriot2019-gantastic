import * as types from './types';


export const name = 'user';

export const initialState = {
  displayName: null,
  email: null,
  id: null,
  isAnonymous: undefined,
  isAuthenticated: undefined,
  isFetching: true,
  photoUrl: null,
  providerData: [],
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        displayName: action.payload.displayName,
        email: action.payload.email,
        id: action.payload.uid,
        isAnonymous: action.payload.isAnonymous,
        isAuthenticated: true,
        isFetching: false,
        photoUrl: action.payload.photoURL,
        providerData: action.payload.providerData,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...initialState,
        isAuthenticated: false,
        isFetching: false,
      };

    default:
      return state;
  }
};
