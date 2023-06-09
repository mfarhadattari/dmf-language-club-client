import { useState } from "react";
import Cover from "./../../../components/Cover";
import { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import Loaders from "../../../components/Loaders";
import InstructorCard from "../../../components/Cards/InstructorCard";

const Instructors = () => {
  const { axiosReq } = useAxios();
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosReq.get("/all-instructor").then(({ data }) => {
      setInstructors(data);
      setLoading(false);
    });
  }, [axiosReq]);

  return (
    <main>
      <Cover
        heading="Our Instructors"
        bgImage="bg-[url('https://i.ibb.co/zFqd4M5/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime-146671-16288.jpg')]"
      ></Cover>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {instructors.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorCard>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Instructors;
