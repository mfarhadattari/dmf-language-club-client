import { useQuery } from "@tanstack/react-query";
import SetTitle from "../../../components/SetTitle";
import useAuthContext from "./../../../hooks/useAuthContext";
import useSecureAxios from "./../../../hooks/useSecureAxios";
import Loaders from "./../../../components/Loaders";

const Profile = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();

  const {
    data: profileInfo = {},
    isLoading,
    refetch: refetchProfileInfo,
  } = useQuery({
    queryKey: ["profileInfo", secureAxios, authUser],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/user-profile?email=${authUser?.email}`
      );
      return res.data;
    },
  });

  console.log(profileInfo);

  return (
    <main>
      <SetTitle title="Profile - DMF Language Club"></SetTitle>
      {isLoading ? <Loaders></Loaders> : <section></section>}
    </main>
  );
};

export default Profile;
