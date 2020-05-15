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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
