import { useState } from "react";
import SectionHeading from "../../../../components/SectionHeading";
import useAxios from "./../../../../hooks/useAxios";

const PopularClasses = () => {
  const { axiosReq } = useAxios();
  const [popularClasses, setPopularClasses] = useState([]);

  axiosReq.get("/popular-classes").then(({ data }) => {
    setPopularClasses(data);
  });

  return (
    <section className="my-10">
      <SectionHeading heading="Popular Classes"></SectionHeading>
      <div>
        {
        popularClasses.map(item => <p key={item._id}>{item.name}</p> )
        }
        </div>
    </section>
  );
};

export default PopularClasses;
