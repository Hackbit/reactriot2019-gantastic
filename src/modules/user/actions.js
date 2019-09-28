import * as types from './types';


export const userLoginFailure = (message, error) => ({
  type: types.USER_LOGIN_FAILURE,
  payload: { message, error },
});

export const userLoginSuccess = payload => ({
  type: types.USER_LOGIN_SUCCESS,
  payload,
});
