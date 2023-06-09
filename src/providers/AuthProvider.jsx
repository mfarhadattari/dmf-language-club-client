import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../Firebase/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const { axiosReq } = useAxios();

  // !------------ CREATE USER -------------------! //
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   ! ------------- Login User -------------------! //
  const loginUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   !--------------------- Logout User -------------! //
  const logoutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  //   !---------------- Social Login ----------------! //
  const socialLoginUser = (provider) => {
    setAuthLoading(true);
    return signInWithPopup(auth, provider);
  };

  // !----------- GET Logged User ---------------! //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setAuthUser(currentUser);
        axiosReq
          .post("/generate-jwt", { email: currentUser.email })
          .then(({ data }) => {
            localStorage.setItem("dmf-lg-club-token", `Bearer ${data.token}`);
            setAuthLoading(false);
          });
      } else {
        setAuthUser(null);
        localStorage.removeItem("dmf-lg-club-token")
        setAuthLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosReq]);

  /* --------------------------------------------------
  !------------------ AUTH INFO ---------------------- */
  const authInfo = {
    authUser,
    authLoading,
    createUser,
    loginUser,
    logoutUser,
    socialLoginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
