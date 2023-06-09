import { useState } from "react";
import Cover from "./../../../components/Cover";
import useAxios from "./../../../hooks/useAxios";
import { useEffect } from "react";
import Loaders from "./../../../components/Loaders";
const Classes = () => {
  const { axiosReq } = useAxios();
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosReq.get("/all-classes").then(({ data }) => {
      setAllClasses(data);
      setLoading(false);
    });
  }, [axiosReq]);

  return (
    <main>
      <Cover
        heading="Our Classes"
        bgImage="bg-[url('https://i.ibb.co/7GkCnvk/webinar-concept-illustration-114360-4764.jpg')]"
      ></Cover>
      <section>
        {loading ? <Loaders></Loaders> : <div>{allClasses.length}</div>}
      </section>
    </main>
  );
};

export default Classes;
