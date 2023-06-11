import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";
const useUserRole = () => {
  const { secureAxios } = useSecureAxios();
  const { authUser } = useAuthContext();

  const [userRole, setUserRole] = useState("student");
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      secureAxios.get(`/user-role?email=${authUser.email}`).then(({ data }) => {
        setUserRole(data.role);
        setRoleLoading(false);
      });
    }
  }, [authUser, secureAxios]);

  return { userRole, roleLoading };
};

export default useUserRole;
