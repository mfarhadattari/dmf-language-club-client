import { useQuery } from "@tanstack/react-query";
import SetTitle from "../../components/setTitle";
import useSecureAxios from "../../hooks/useSecureAxios";
import Loaders from "../../components/Loaders";
import useAuthContext from "../../hooks/useAuthContext";
import CartItem from "../../components/TableRow/CartItem";

const SelectedClass = () => {
  const { secureAxios } = useSecureAxios();
  const { authUser, authLoading } = useAuthContext();

  const { data: carts = [], isLoading } = useQuery({
    queryKey: ["carts", secureAxios, authUser],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/student/my-carts?email=${authUser.email}`
      );
      return res.data;
    },
    enabled: !authLoading,
  });
  return (
    <main>
      <SetTitle title="Selected Class - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Selected Class</h1>
      </div>
      {isLoading ? (
        <Loaders></Loaders>
      ) : (
        <section>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border-b-4 border-blue-600">
                  <th className="text-xl">#</th>
                  <th className="text-xl">Image</th>
                  <th className="text-xl">Name & Price</th>
                  <th className="text-xl text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cartItem, index) => (
                  <CartItem
                    key={cartItem._id}
                    index={index}
                    cartItem={cartItem}
                  ></CartItem>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
};

export default SelectedClass;
