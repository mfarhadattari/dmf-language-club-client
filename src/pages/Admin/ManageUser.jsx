import { useEffect } from "react";
import SetTitle from "../../components/setTitle";
import useAuthContext from "./../../hooks/useAuthContext";
import useSecureAxios from "./../../hooks/useSecureAxios";
import { useState } from "react";
import Loaders from "./../../components/Loaders";
import UserRow from "../../components/TableRow/UserRow";

const ManageUser = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: User role update functionality
  useEffect(() => {
    secureAxios.get(`/admin/users?email=${authUser.email}`).then(({ data }) => {
      setUsers(data);
      setLoading(false);
    });
  }, [secureAxios, authUser]);

  return (
    <main>
      <SetTitle title="Manage User - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Manage User</h1>
      </div>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <section>
          <div className="overflow-x-auto">
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
                  <UserRow key={user._id} user={user} index={index}></UserRow>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
};

export default ManageUser;
