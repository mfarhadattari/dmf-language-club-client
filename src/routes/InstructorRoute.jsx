import { Navigate } from "react-router-dom";
import Loaders from "../components/Loaders";
import useUserRole from "./../hooks/useUserRole";
const InstructorRoute = ({ children }) => {
  const { userRole, roleLoading } = useUserRole();
  if (roleLoading) {
    return <Loaders></Loaders>;
  }
  if (userRole === "instructor") {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default InstructorRoute;
