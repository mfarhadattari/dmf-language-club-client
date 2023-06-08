import { useEffect } from "react";
import Cover from "../../../../components/Cover";
import useAxios from "./../../../../hooks/useAxios";
import { useState } from "react";

const PopularInstructor = () => {
  const { axiosReq } = useAxios();
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    axiosReq.get("/popular-instructor").then(({ data }) => {
      setPopularInstructor(data);
      console.log(data)
    });
  }, [axiosReq]);

  return (
    <section className="my-10">
      <Cover
        heading="Popular Instructor"
        bgImage={"bg-popular-instructor-bg"}
      ></Cover>
    </section>
  );
};

export default PopularInstructor;
