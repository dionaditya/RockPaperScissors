/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/**
 *
 * Leaderboard
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import LoginButtonWithGoogle from 'components/LoginButtonWithGoogle';
import {
  makeSelectisLogin,
  makeSelectUserData,
} from 'containers/App/selectors';
import LeaderboardTable from 'components/LeaderboardTable';
import HeaderLeaderboard from 'components/HeaderLeaderboard';
import UserProfile from 'components/UserProfile';
import { Paper, Rock, Scissors } from 'components/ButtonRockScissorsPaper';
import { loginWithGoogle, syncUser, signOutUser} from 'containers/App/actions';
import reducer from './reducer';
import saga from './saga';
import 'antd/dist/antd.css'
import { Button } from 'antd';

export function Leaderboard({ login, isLogin, userData, sync, signOut }) {
  useInjectReducer({ key: 'leaderboard', reducer });
  useInjectSaga({ key: 'leaderboard', saga });

  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [state, setState] = React.useState({
    computerPick: null,
    points: null
  });
  const [isStart, setStart] = React.useState(true)

  React.useEffect(() => {
    
    sync()
  }, []);


  const handleClick = async event => {
    const { value } = event.target;
    console.log(value);

    const res = await fetch(`https://dionaditya-rockpaperscissorsserver.glitch.me/play?userPick=${value}&id=${userData.uid}`);
    const result = await res.json();
    setState({
      ...state,
      points: result.points,
      computerPick: result.computerPick,
    });
  };

  console.log(state.computerPick);

  const handleLogin = () => {
    login();
  };

  const handleSignOut = () => {
    signOut()
  }

  const handleStart = async (userData) => {
    console.log('start', userData.uid, userData.displayName)
    const data = {
      name: userData.displayName,
    }
    const baseURL = `https://dionaditya-rockpaperscissorsserver.glitch.me/start?id=${userData.uid}`
    const start = await fetch(baseURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const response = await start.json()
    console.log(response.success) 
  }

  console.log('userdata', userData)

  const StatusGame = ({points, computerPick}) => {
    switch(points) {
      case 0:
        return(
          <div>
            Permainan seri, musuh memilih {computerPick}. Score kamu bertambah tidak bertambah
          </div>
          )
      case -1:
        return(
          <div>
            Kamu kalah, musuh memilih {computerPick}. Score kamu berkurang {points}
          </div>
          )
      default: 
        return(
          <div>
            Kamu Menang, musuh memilih {computerPick}. Score kamu bertambah {points}
          </div>
          )
    }
  }

  return (
    <Fragment style={{
      display: 'grid',
      justifyContent: 'center',
      width: '100%',
      margin: 'auto'
    }}>
      <h1>Welcome to The Game</h1>
      <div style={{
          padding: '10px 20px',
          justifyContent: 'center center'
      }}>
            <div style={{
        padding: '20px'
      }}>
        { userData ? (
          <UserProfile userData={userData}/>
        ) : (
          <div />
        )}
        { isLogin || userData ? (
          <div />
        ) : (
          <LoginButtonWithGoogle handleClick={handleLogin} />
        )}
      </div>
      { userData ? (
        <div>
          {
            isStart ? (
              <Button 
                onClick={() => handleStart(userData)}>
                start
              </Button>
              ) : (
               <Button 
                onClick={() => handleStart(userData)} disabled>
                Sudah start
              </Button>
              )
          }
        </div>
      ) : (
        <div />
      )}
      {
        isLogin || userData ? (
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '20px'
            }}>
              <Paper handleClick={handleClick} />
              <Rock handleClick={handleClick} />
              <Scissors handleClick={handleClick} />
            </div>
          ) : (
           <div style={{
              display: 'flex',
              flexDirection: 'row',
              padding: '20px'
            }}>
              <Paper handleClick={handleClick} disabled={true} />
              <Rock handleClick={handleClick} disabled={true}/>
              <Scissors handleClick={handleClick} disabled={true}/>
            </div>
          )
      }
      {
        isLogin || userData? (
          <Button onClick={handleSignOut}>
            signOut
          </Button>
          ) : (
          <div />
          )
      }
      {
        state.points !== null ? (
          <StatusGame points={state.points} computerPick={state.computerPick}/>
          ) : (
            null
          )
      }
      <div>
        <LeaderboardTable points={state.points}/>
      </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  isLogin: makeSelectisLogin(),
  userData: makeSelectUserData(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginWithGoogle()),
    sync: () => dispatch(syncUser()),
    signOut: () => dispatch(signOutUser())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Leaderboard);
