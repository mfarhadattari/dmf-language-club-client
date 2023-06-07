import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // !------------ CREATE USER -------------------! //
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   ! ------------- Login User -------------------! //
  const loginUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(email, password);
  };

  //   !--------------------- Logout User -------------! //
  const logoutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  // !----------- GET Logged User ---------------! //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setAuthUser(currentUser);
        setAuthLoading(false);
      } else {
        setAuthUser(null);
        setAuthLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /* --------------------------------------------------
  !------------------ AUTH INFO ---------------------- */
  const authInfo = {
    authUser,
    authLoading,
    createUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
