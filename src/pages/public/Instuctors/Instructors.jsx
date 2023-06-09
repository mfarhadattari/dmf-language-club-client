import { useState } from "react";
import Cover from "./../../../components/Cover";
import { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import Loaders from "../../../components/Loaders";
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
      {loading ? <Loaders></Loaders> : <div>{instructors.length}</div>}
    </main>
  );
};

export default Instructors;
