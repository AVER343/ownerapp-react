
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJJDqlHdKKQNIs1_o3oCrqi1SIG1X5emo",
    authDomain: "intern-e3d31.firebaseapp.com",
    databaseURL: "https://intern-e3d31.firebaseio.com",
    projectId: "intern-e3d31",
    storageBucket: "intern-e3d31.appspot.com",
    messagingSenderId: "805316674223",
    appId: "1:805316674223:web:1d57d241679957431d8a5a",
    measurementId: "G-STKWP7TCME"
  };
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        photoURL:userAuth.photoURL,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
