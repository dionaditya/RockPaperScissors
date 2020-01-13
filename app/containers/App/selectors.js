/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectisLogin = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isLogin,
  );

const makeSelectUserData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData,
  );

export { selectGlobal, makeSelectisLogin, makeSelectUserData };
