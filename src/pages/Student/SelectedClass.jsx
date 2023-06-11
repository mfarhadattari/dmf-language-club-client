import { useQuery } from "@tanstack/react-query";
import SetTitle from "../../components/setTitle";
import useSecureAxios from "../../hooks/useSecureAxios";
import Loaders from "../../components/Loaders";
import useAuthContext from "../../hooks/useAuthContext";

const SelectedClass = () => {
  const { secureAxios } = useSecureAxios();
  const { authUser } = useAuthContext();

  const { data: carts = [], isLoading } = useQuery({
    queryKey: ["carts", secureAxios, authUser],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/student/my-carts?email=${authUser.email}`
      );
      return res.data;
    },
  });
  return (
    <main>
      <SetTitle title="Selected Class - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Selected Class</h1>
      </div>
      {isLoading ? <Loaders></Loaders> : <section>{carts.length}</section>}
    </main>
  );
};

export default SelectedClass;
