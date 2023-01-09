import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGd9QYpp_9xAsKHYEEmwC83UFfOqvPxIY",
  authDomain: "crwn-clothing-db-92bf4.firebaseapp.com",
  projectId: "crwn-clothing-db-92bf4",
  storageBucket: "crwn-clothing-db-92bf4.appspot.com",
  messagingSenderId: "502411767833",
  appId: "1:502411767833:web:776a6aa29f7fe97d05ba88",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Initialize provider
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  // force user to select account
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
