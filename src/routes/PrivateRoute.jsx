import useAuthContext from "./../hooks/useAuthContext";
import Loaders from "./../components/Loaders";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { authUser, authLoading } = useAuthContext();

  const location = useLocation();

  if (authLoading) {
    return <Loaders></Loaders>;
  }
  if (authUser) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      ></Navigate>
    );
  }
};

export default PrivateRoute;
