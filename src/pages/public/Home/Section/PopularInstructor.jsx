import { useEffect } from "react";
import Cover from "../../../../components/Cover";
import useAxios from "./../../../../hooks/useAxios";
import { useState } from "react";
import InstructorCard from "../../../../components/Cards/InstructorCard";
import Loaders from "./../../../../components/Loaders";
import PrimaryBtn from "../../../../components/Button/PrimaryBtn";
import { Link } from "react-router-dom";

const PopularInstructor = () => {
  const { axiosReq } = useAxios();
  const [popularInstructors, setPopularInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosReq.get("/popular-instructors").then(({ data }) => {
      setPopularInstructors(data);
      setLoading(false);
    });
  }, [axiosReq]);

  return (
    <section className="my-10">
      <Cover
        heading="Popular Instructor"
        bgImage="bg-[url('https://i.ibb.co/LSBsbqw/popular-instructor.jpg')]"
      ></Cover>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {popularInstructors.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorCard>
            ))}
          </div>
          <div className="w-3/4 md:w-2/5 mx-auto">
            <Link to="/instructors">
              <PrimaryBtn>See All Instructors</PrimaryBtn>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularInstructor;
