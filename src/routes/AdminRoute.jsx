import Loaders from "../components/Loaders";
import useUserRole from "../hooks/useUserRole";

const AdminRoute = ({ children }) => {
  const { userRole, roleLoading } = useUserRole();
  if (roleLoading) {
    return <Loaders></Loaders>;
  }
  if (userRole === "admin") {
    return children;
  }
};

export default AdminRoute;
