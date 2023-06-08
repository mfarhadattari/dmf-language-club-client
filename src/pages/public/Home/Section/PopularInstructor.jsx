import { useEffect } from "react";
import Cover from "../../../../components/Cover";
import useAxios from "./../../../../hooks/useAxios";
import { useState } from "react";
import InstructorCard from "../../../../components/Cards/InstructorCard";
import Loaders from "./../../../../components/Loaders";

const PopularInstructor = () => {
  const { axiosReq } = useAxios();
  const [popularInstructors, setPopularInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosReq.get("/popular-instructor").then(({ data }) => {
      setPopularInstructors(data);
      setLoading(false);
    });
  }, [axiosReq]);

  return (
    <section className="my-10">
      <Cover
        heading="Popular Instructor"
        bgImage={"bg-popular-instructor-bg"}
      ></Cover>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
          {popularInstructors.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularInstructor;
