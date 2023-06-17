import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Loaders from "../../../components/Loaders";
import SetTitle from "../../../components/setTitle";
import Cover from "../../../components/Cover";
import CourseCard from "../../../components/Cards/CourseCard";
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaServer,
  FaUserGraduate,
} from "react-icons/fa";

const InstructorClass = () => {
  const { id } = useParams();
  const { axiosReq } = useAxios();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["data", axiosReq, id],
    queryFn: async () => {
      const req = await axiosReq.get(`/instructors/${id}`);
      return req.data;
    },
  });
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loaders></Loaders>
      ) : (
        <main>
          <SetTitle
            title={`${data?.instructorInfo?.displayName} - DMF Language Club`}
          ></SetTitle>
          <Cover
            heading={data?.instructorInfo.displayName}
            bgImage='bg-[url("https://i.ibb.co/zFqd4M5/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime-146671-16288.jpg")]'
          ></Cover>
          <section className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-fit mx-auto items-center gap-20">
              <div className="w-fit mx-auto">
                <img
                  src={data?.instructorInfo?.photoURL}
                  alt={data?.instructorInfo?.displayName}
                  className="w-[300px] h-[300px] rounded-lg"
                />
              </div>
              <div className="text-2xl w-fit mx-auto space-y-2">
                <h1 className="text-5xl">
                  {data?.instructorInfo?.displayName}
                </h1>
                <p className="flex items-center gap-3">
                  <FaEnvelope></FaEnvelope> {data?.instructorInfo?.email}
                </p>
                {data?.instructorInfo?.phone && (
                  <p className="flex items-center gap-3">
                    <FaPhone></FaPhone> {data?.instructorInfo?.phone}
                  </p>
                )}
                {data?.instructorInfo?.address && (
                  <p className="flex items-center gap-3">
                    <FaLocationArrow></FaLocationArrow>{" "}
                    {data?.instructorInfo?.address}
                  </p>
                )}
                <p className="flex items-center gap-3">
                  <FaServer></FaServer>
                  Total Class: {data?.instructorInfo?.totalClass || 0}
                </p>
                <p className="flex items-center gap-3">
                  <FaUserGraduate></FaUserGraduate> Total Student:{" "}
                  {data?.instructorInfo?.totalStudent || 0}
                </p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <h1 className="text-center text-5xl my-10 border-b-4 p-3 border-blue-600 w-fit mx-auto">
              Classes Of {data?.instructorInfo?.displayName}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
              {data?.instructorClasses.map((item) => (
                <CourseCard key={item._id} item={item}></CourseCard>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default InstructorClass;
