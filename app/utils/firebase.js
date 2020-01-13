import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3_VN2HW2ZbuGgIETv0dPwRicTYSgY9yg',
  authDomain: 'olahikan.firebaseapp.com',
  databaseURL: 'https://olahikan.firebaseio.com',
  projectId: 'olahikan',
  storageBucket: 'olahikan.appspot.com',
  messagingSenderId: '512763030653',
  appId: '1:512763030653:web:bea2ebadbfb9e69667d514',
  measurementId: 'G-JHFENSL5FR',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
