// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import firebase from 'firebase';
import { put, call, takeLatest, take } from 'redux-saga/effects';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { loginFailure, loginSuccess, syncUser, signOutUser, signOutSuccess, signOutFailure} from 'containers/App/actions';
import { LOGIN_WITH_GOOGLE, SYNC_USER, SIGNOUT_USER} from 'containers/App/constants';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD3_VN2HW2ZbuGgIETv0dPwRicTYSgY9yg',
  authDomain: 'olahikan.firebaseapp.com',
  databaseURL: 'https://olahikan.firebaseio.com',
  projectId: 'olahikan',
  storageBucket: 'olahikan.appspot.com',
  messagingSenderId: '512763030653',
  appId: '1:512763030653:web:bea2ebadbfb9e69667d514',
  measurementId: 'G-JHFENSL5FR',
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

const authProvider = new firebase.auth.GoogleAuthProvider();

function* syncUserSaga() {
  const channel = yield call(reduxSagaFirebase.auth.channel);
  console.log('sync')

  while (true) {
    const { error, user } = yield take(channel);

    console.log(user)
    if (user) yield put(syncUser(user));
    else yield put(syncUser(error));
  }
}

function* signOutSaga() {
  try {
    const data = yield call(reduxSagaFirebase.auth.signOut);
    console.log('data', data)
    yield put(signOutSuccess(data));
  }
  catch(error) {
    yield put(signOutFailure(error));
  }
}

function* loginWithPopUpGoogleSaga() {
  try {
    const data = yield call(
      reduxSagaFirebase.auth.signInWithPopup,
      authProvider,
    );
    console.log('data', data);
    yield put(loginSuccess(data));
    console.log('loginSuccess')
    yield put(syncUserSaga())
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* leaderboardSaga() {
  yield takeLatest(LOGIN_WITH_GOOGLE, loginWithPopUpGoogleSaga);
  yield takeLatest(SYNC_USER, syncUserSaga)
  yield takeLatest(SIGNOUT_USER, signOutSaga)
  // See example in containers/HomePage/saga.js
}
