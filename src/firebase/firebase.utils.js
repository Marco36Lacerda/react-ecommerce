import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyATgJQDjPk0ySjr3wFyPB6Ec9wkrSPT_qg',
  authDomain: 'my-crown-db-cdd76.firebaseapp.com',
  projectId: 'my-crown-db-cdd76',
  storageBucket: 'my-crown-db-cdd76.appspot.com',
  messagingSenderId: '903919021902',
  appId: '1:903919021902:web:7ce5db2be84bbf2560b81f',
};

export const createUserProfileDocument = async (userAuth, addiotionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addiotionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
