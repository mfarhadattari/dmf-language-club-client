import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";
const useUserRole = () => {
  const { secureAxios } = useSecureAxios();
  const { authUser, authLoading } = useAuthContext();

  const [userRole, setUserRole] = useState("student");
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (authUser && !authLoading) {
      secureAxios.get(`/user-role?email=${authUser.email}`).then(({ data }) => {
        setUserRole(data.role);
        setRoleLoading(false);
      });
    } else {
      setUserRole("student");
      setRoleLoading(false);
    }
  }, [authUser, secureAxios, authLoading]);

  return { userRole, roleLoading };
};

export default useUserRole;
