import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the leaderboard state domain
 */

const selectLeaderboardDomain = state => state.leaderboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Leaderboard
 */

const makeSelectLeaderboard = () =>
  createSelector(
    selectLeaderboardDomain,
    substate => substate,
  );

export default makeSelectLeaderboard;
export { selectLeaderboardDomain };
