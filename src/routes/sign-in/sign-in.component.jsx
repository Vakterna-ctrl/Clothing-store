import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentsFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentsFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentsFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleuser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
