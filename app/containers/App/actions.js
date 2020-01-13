/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN_WITH_GOOGLE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SYNC_USER,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_USER
} from './constants';

export const loginWithGoogle = () => ({
  type: LOGIN_WITH_GOOGLE,
});

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const signOutUser = () => {
  return {
    type: SIGNOUT_USER,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signOutFailure = error => {
  return {
    type: SIGNOUT_FAILURE,
    error
  };
};


export const syncUser = user => {
  console.log('user', user);
  return {
    type: SYNC_USER,
    user,
  };
};

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});
