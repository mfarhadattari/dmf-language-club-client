import { useEffect, useState } from "react";
import SectionHeading from "../../../../components/SectionHeading";
import useAxios from "./../../../../hooks/useAxios";
import CourseCard from "../../../../components/CourseCard";

const PopularClasses = () => {
  const { axiosReq } = useAxios();
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    axiosReq.get("/popular-classes").then(({ data }) => {
      setPopularClasses(data);
    });
  }, [axiosReq]);

  return (
    <section className="my-10">
      <SectionHeading heading="Popular Classes"></SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {popularClasses.map((item) => (
          <CourseCard key={item._id} item={item}></CourseCard>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
