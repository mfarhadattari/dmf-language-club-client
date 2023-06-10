import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAuthContext from "../../hooks/useAuthContext";
import SetTitle from "../../components/setTitle";
import Loaders from "../../components/Loaders";
import ClassRow from "../../components/TableRow/ClassRow";

const ManageClass = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO: class action functionality
  useEffect(() => {
    secureAxios.get(`/admin/classes?email=${authUser.email}`).then(({ data }) => {
      setClasses(data);
      setLoading(false);
    });
  }, [secureAxios, authUser]);

  return (
    <main>
      <SetTitle title="Manage Class - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Manage Classes</h1>
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
                  <th className="text-xl">Image and Name</th>
                  <th className="text-xl">Instructor</th>
                  <th className="text-xl text-center">Info</th>
                  <th className="text-xl text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classItem, index) => (
                  <ClassRow key={classItem._id} classItem={classItem} index={index}></ClassRow>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
};

export default ManageClass;
