import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthContext = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuthContext;
