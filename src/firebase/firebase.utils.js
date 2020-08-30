import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBQaPQLuF04BADldB9lbqAZ2sVPwpZp5pM',
  authDomain: 'sun-db-a665a.firebaseapp.com',
  databaseURL: 'https://sun-db-a665a.firebaseio.com',
  projectId: 'sun-db-a665a',
  storageBucket: 'sun-db-a665a.appspot.com',
  messagingSenderId: '958173682644',
  appId: '1:958173682644:web:04113c636eb03873bb9441',
  measurementId: 'G-8ED5HXV16P',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
