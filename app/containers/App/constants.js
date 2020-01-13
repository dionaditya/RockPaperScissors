/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOGIN_WITH_GOOGLE = 'LOGIN_WITH_GOOGLE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SYNC_USER = 'LOGIN_FAILURE';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE'
export const SIGNOUT_USER = 'SIGNOUT_USER'