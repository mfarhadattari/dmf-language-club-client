import { useEffect } from "react";
import Cover from "../../../../components/Cover";
import useAxios from "./../../../../hooks/useAxios";
import { useState } from "react";
import InstructorCard from "../../../../components/Cards/InstructorCard";

const PopularInstructor = () => {
  const { axiosReq } = useAxios();
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    axiosReq.get("/popular-instructor").then(({ data }) => {
      setPopularInstructors(data);
      console.log(data);
    });
  }, [axiosReq]);

  return (
    <section className="my-10">
      <Cover
        heading="Popular Instructor"
        bgImage={"bg-popular-instructor-bg"}
      ></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {popularInstructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructor;
