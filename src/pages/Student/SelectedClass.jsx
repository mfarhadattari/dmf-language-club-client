import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
import Loaders from "../../components/Loaders";
import useAuthContext from "../../hooks/useAuthContext";
import CartItem from "../../components/TableRow/CartItem";
import ConfirmationAlert from "./../../components/Message/ConfirmationAlert";
import SuccessAlert from "./../../components/Message/SuccessAlert";
import SetTitle from './../../components/SetTitle';

const SelectedClass = () => {
  const { secureAxios } = useSecureAxios();
  const { authUser, authLoading } = useAuthContext();

  // !--------------- GET Carts Data -----------------! //
  const {
    data: carts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts", secureAxios, authUser],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/student/my-carts?email=${authUser.email}`
      );
      return res.data;
    },
    enabled: !authLoading,
  });

  // ! --------------------- Delete from Carts -----------! //
  const deleteFromCart = (id) => {
    ConfirmationAlert("Sure want to delete?").then((res) => {
      if (res.isConfirmed) {
        secureAxios
          .delete(`/student/delete-from-carts/${id}?email=${authUser?.email}`)
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              SuccessAlert("Successfully Deleted!");
              refetch();
            }
          });
      }
    });
  };

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
          <div className="overflow-x-auto w-[350px] md:w-full">
            <table className="table mb-10">
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
                    deleteFromCart={deleteFromCart}
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
