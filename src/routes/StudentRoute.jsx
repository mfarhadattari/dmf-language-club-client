import { Navigate } from "react-router-dom";
import Loaders from "../components/Loaders";
import useUserRole from "../hooks/useUserRole";

const StudentRoute = ({ children }) => {
  const { userRole, roleLoading } = useUserRole();
  if (roleLoading) {
    return <Loaders></Loaders>;
  }
  if (userRole === "instructor" || userRole === "admin") {
    return <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
};

export default StudentRoute;
