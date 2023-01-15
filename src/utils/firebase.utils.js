import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// doc = get document instance
// getDoc = access data
// setDoc = write in data
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGd9QYpp_9xAsKHYEEmwC83UFfOqvPxIY",
  authDomain: "crwn-clothing-db-92bf4.firebaseapp.com",
  projectId: "crwn-clothing-db-92bf4",
  storageBucket: "crwn-clothing-db-92bf4.appspot.com",
  messagingSenderId: "502411767833",
  appId: "1:502411767833:web:776a6aa29f7fe97d05ba88",
};

// Initialize Firebase
// This instance allows CRUD to happen
const firebaseApp = initializeApp(firebaseConfig);

//Initialize provider
// needed for google authentication
const googleProvider = new GoogleAuthProvider();

// tells how google authentication on how to behave
googleProvider.setCustomParameters({
  // force user to select account
  prompt: "select_account",
});

// keeps track of the authentication state of the entire applicaion
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentsFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  // instance of a document model
  const userDocRef = doc(db, "users", userAuth.uid);

  // get data from document and also check if document exist
  const userSnapshot = await getDoc(userDocRef);

  //check if document exist if not create document
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createAuthUserWithEmailAndPassword(auth, email, password);
};
