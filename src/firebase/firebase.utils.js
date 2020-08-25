import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//mengimport firebase/firestore dan firebase/auth agar bisa diggunakan oleh firebase

const config = {
  apiKey: 'AIzaSyAFTy6_TUE42SZE7QKp1v1gYYaure1jfsU',
  authDomain: 'crwn-db-5e2b7.firebaseapp.com',
  databaseURL: 'https://crwn-db-5e2b7.firebaseio.com',
  projectId: 'crwn-db-5e2b7',
  storageBucket: 'crwn-db-5e2b7.appspot.com',
  messagingSenderId: '679132841711',
  appId: '1:679132841711:web:44bf7ac2968603590a3d1a',
  measurementId: 'G-0ER81RNQW9',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // userRef disini adalah DocumentReference kenapa document ya karena kita disini mengunakan doc jika collection maka jadi collectionReference
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //snapshot disini adalah snapshotObject
  const snapshot = await userRef.get();
  //akan masuk ke if jika user belum pernah sign sebelumnya
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('terdapat error ketika membuat user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  /**
   * batch gunanya untuk mengroup call/permintaan/request ke firestore,karena kita
   * tidak mau untuk melakukan request tiap kali di loop maka dari itu ditaruh
   * dibatch.set, setelah itu baru dicommit
   */
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    /*
      Membuat document baru pada firebase jika tidak ada argumen maka nanti akan
      diberi unique ID otomatis dari firebase, tapi jika diisi nama documentnya
      adalah nama yang ada di argumen, cth: collectionRef.doc("koleksi") nama doc
      di firebase adalah "koleksi" 
    */
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
