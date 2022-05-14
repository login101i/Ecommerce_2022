import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCeRBW8bxK__5Awaz7VtPQr1MLp5Xndb-Q",
  authDomain: "ecommerce2022i.firebaseapp.com",
  projectId: "ecommerce2022i",
  storageBucket: "ecommerce2022i.appspot.com",
  messagingSenderId: "321985496599",
  appId: "1:321985496599:web:2860c17b6ea0354a113e52",
  measurementId: "G-RJLXNFT4HM"
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
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
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
