import SetTitle from "../../components/setTitle";
import useAuthContext from "./../../hooks/useAuthContext";
import useSecureAxios from "./../../hooks/useSecureAxios";
import Loaders from "./../../components/Loaders";
import UserRow from "../../components/TableRow/UserRow";
import { useQuery } from "@tanstack/react-query";
import ConfirmationAlert from "./../../components/Message/ConfirmationAlert";
import SuccessAlert from "./../../components/Message/SuccessAlert";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";

// TODO: Searching System
// TODO: Filtering System

const ManageUser = () => {
  const { authUser, authLoading } = useAuthContext();
  const { secureAxios } = useSecureAxios();

  const [totalItem, setTotalItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(totalItem / 10) || 0;

  useEffect(() => {
    secureAxios
      .get(`/admin/total-users?email=${authUser?.email}`)
      .then(({ data }) => {
        setTotalItem(data.totalUsers);
      });
  }, [authUser, secureAxios]);

  // !---------------------- Get User -------------------! //
  const {
    data: users = [],
    isLoading,
    refetch: refetchUsers,
  } = useQuery({
    queryKey: ["users", secureAxios, authUser, currentPage, totalItem],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/admin/users?email=${authUser.email}&totalItem=${totalItem}&currentPage=${currentPage}`
      );
      return res.data;
    },
    enabled: !authLoading,
  });

  // !---------------------- Make Admin -------------------! //
  const makeAdmin = (user) => {
    ConfirmationAlert("Want to make Admin?").then((res) => {
      if (res.isConfirmed) {
        secureAxios
          .patch(`/admin/make-admin?email=${authUser.email}`, {
            email: user.email,
          })
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              SuccessAlert(`${user.displayName} is now Admin`);
              refetchUsers();
            }
          });
      }
    });
  };

  // !---------------------- Make Instructor -------------------! //
  const makeInstructor = (user) => {
    ConfirmationAlert("Want to make Instructor?").then((res) => {
      if (res.isConfirmed) {
        secureAxios
          .patch(`/admin/make-instructor?email=${authUser.email}`, {
            email: user.email,
          })
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              SuccessAlert(`${user.displayName} is now Instructor`);
              refetchUsers();
            }
          });
      }
    });
  };

  return (
    <main>
      <SetTitle title="Manage User - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Manage User</h1>
      </div>
      {isLoading ? (
        <Loaders></Loaders>
      ) : (
        <section>
          <div className="overflow-x-auto w-[350px] mx-auto md:w-full">
            <table className="table">
              <thead>
                <tr className="border-b-4 border-blue-600">
                  <th className="text-xl">#</th>
                  <th className="text-xl">Photo</th>
                  <th className="text-xl">Name</th>
                  <th className="text-xl text-center">Role</th>
                  <th className="text-xl text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <UserRow
                    key={user._id}
                    user={user}
                    index={index}
                    makeAdmin={makeAdmin}
                    makeInstructor={makeInstructor}
                  ></UserRow>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
          ></Pagination>
        </section>
      )}
    </main>
  );
};

export default ManageUser;
