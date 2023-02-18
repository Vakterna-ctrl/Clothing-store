// import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up.form.component";
import SignInForm from "../../components/sign-in-form/sign-in.form.component";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentsFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
