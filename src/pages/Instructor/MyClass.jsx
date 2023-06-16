import { useEffect, useState } from "react";
import SetTitle from "../../components/setTitle";
import useAuthContext from "../../hooks/useAuthContext";
import useSecureAxios from "../../hooks/useSecureAxios";
import Loaders from "../../components/Loaders";
import InstructorClassRow from "../../components/TableRow/InstructorClassRow";

// TODO: Searching System
// TODO: Filtering System
// TODO: Pagination
const MyClass = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    secureAxios
      .get(`/instructor/my-classes?email=${authUser?.email}`)
      .then(({ data }) => {
        setClasses(data);
        setLoading(false);
      });
  }, [secureAxios, authUser]);

  return (
    <main>
      <SetTitle title="My Classes - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">My Classes</h1>
      </div>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <section>
          <div className="overflow-x-auto w-[350px] md:w-full mx-auto">
            <table className="table mt-10">
              <thead>
                <tr className="border-b-4 border-blue-600">
                  <th className="text-xl">#</th>
                  <th className="text-xl">Image</th>
                  <th className="text-xl">Name & Price</th>
                  <th className="text-xl text-center">Seats & Enrolled</th>
                  <th className="text-xl text-center">Status & Feedback</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classItem, index) => (
                  <InstructorClassRow
                    key={classItem._id}
                    classItem={classItem}
                    index={index}
                  ></InstructorClassRow>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
};

export default MyClass;
