import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1SOdsAjkYikfN8CqFasUNg0ZmYvhqRrk",
  authDomain: "crwn-db-febfb.firebaseapp.com",
  databaseURL: "https://crwn-db-febfb.firebaseio.com",
  projectId: "crwn-db-febfb",
  storageBucket: "crwn-db-febfb.appspot.com",
  messagingSenderId: "820352890929",
  appId: "1:820352890929:web:bc0208d4f6de3950a7bd10",
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
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("Error creating the user", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
