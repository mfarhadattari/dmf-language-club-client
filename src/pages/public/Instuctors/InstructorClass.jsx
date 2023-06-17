import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Loaders from "../../../components/Loaders";

const InstructorClass = () => {
  const { id } = useParams();
  const { axiosReq } = useAxios();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["data", axiosReq, id],
    queryFn: async () => {
      const req = await axiosReq.get(`/instructors/${id}`);
      return req.data;
    },
  });
  console.log(data)
  return (
    <main>
      <h1>This Is Instructor Page</h1>
      {isLoading ? <Loaders></Loaders> : <section></section>}
    </main>
  );
};

export default InstructorClass;
