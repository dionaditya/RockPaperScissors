/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOGIN_SUCCESS,
  SYNC_USER,
  LOGIN_FAILURE,
  LOGIN_WITH_GOOGLE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE
} from './constants';


// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  isLogin: false,
  userData: userData
};

const userData = {
    uid: null,
    name: '',
    photoURL: ''
}
/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log('reducer global', state, action);
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.isLogin = true;
        break;

      case SYNC_USER:
        draft.loading = false;
        draft.error = false;
        draft.userData = action.user;
        break;

      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = true;
        draft.isLogin = false;
        console.log(action.error)
        break;

      case LOGIN_WITH_GOOGLE:
        draft.loading = true;
        break;

      case SIGNOUT_SUCCESS:
        console.log(state, initialState)
        draft.isLogin = false,
        draft.userData = userData
        break;

      case SIGNOUT_FAILURE:
        console.log(state, initialState)
        draft.isLogin = false,
        drafT.userData = userData
        break;

    }
  });

export default appReducer;
