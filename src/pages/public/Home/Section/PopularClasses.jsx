import { useEffect, useState } from "react";
import useAxios from "./../../../../hooks/useAxios";
import CourseCard from "../../../../components/Cards/CourseCard";
import Cover from "../../../../components/Cover";
import Loaders from "./../../../../components/Loaders";

const PopularClasses = () => {
  const { axiosReq } = useAxios();
  const [popularClasses, setPopularClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosReq.get("/popular-classes").then(({ data }) => {
      setPopularClasses(data);
      setLoading(false);
    });
  }, [axiosReq]);

  return (
    <section className="my-10">
      <Cover heading="Popular Classes" bgImage="bg-[url('https://i.ibb.co/CVcZCjF/popular-class.jpg')]"></Cover>
      {loading ? (
        <Loaders></Loaders>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
          {popularClasses.map((item) => (
            <CourseCard key={item._id} item={item}></CourseCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularClasses;
