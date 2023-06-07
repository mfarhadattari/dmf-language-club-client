import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  /* --------------------------------------------------
  !------------------ AUTH INFO ---------------------- */
  const authInfo = {
    authUser,
    authLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
