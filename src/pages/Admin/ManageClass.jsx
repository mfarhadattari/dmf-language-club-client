import useSecureAxios from "../../hooks/useSecureAxios";
import useAuthContext from "../../hooks/useAuthContext";

import Loaders from "../../components/Loaders";
import ClassRow from "../../components/TableRow/ClassRow";
import { useQuery } from "@tanstack/react-query";
import SetTitle from "../../components/setTitle";
import ConfirmationAlert from "./../../components/Message/ConfirmationAlert";
import SuccessAlert from "./../../components/Message/SuccessAlert";
import Feedback from "../../components/Message/Feedback";

const ManageClass = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();

  // TODO: class action functionality
  const {
    isLoading,
    refetch: refetchClass,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes", authUser?.email],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/admin/classes?email=${authUser.email}`
      );
      return res.data;
    },
  });

  const approveClass = (id) => {
    ConfirmationAlert("Sure Approve?").then((res) => {
      if (res.isConfirmed) {
        secureAxios
          .patch(`/admin/approve-class/${id}?email=${authUser.email}`)
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              refetchClass();
              SuccessAlert("Approve Successfully!");
            }
          });
      }
    });
  };

  const deniedClass = (id) => {
    ConfirmationAlert("Sure Denied?").then((res) => {
      if (res.isConfirmed) {
        secureAxios
          .patch(`/admin/denied-class/${id}?email=${authUser.email}`)
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              refetchClass();
              SuccessAlert("Denied Successfully!");
            }
          });
      }
    });
  };
  const classFeedback = (id) => {
    Feedback().then((result) => {
      if (result.isConfirmed) {
        const feedback = result.value;
        secureAxios
          .post(`/admin/class-feedback/${id}?email=${authUser?.email}`, {
            feedback: feedback,
          })
          .then(({ data }) => {
            if (data.modifiedCount > 0) {
              SuccessAlert("Feedback send!");
            }
          });
      }
    });
  };

  return (
    <main>
      <SetTitle title="Manage Class - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Manage Classes</h1>
      </div>
      {isLoading ? (
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
                  <ClassRow
                    key={classItem._id}
                    classItem={classItem}
                    index={index}
                    approveClass={approveClass}
                    deniedClass={deniedClass}
                    classFeedback={classFeedback}
                  ></ClassRow>
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
