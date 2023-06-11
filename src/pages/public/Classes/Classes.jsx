import Cover from "./../../../components/Cover";
import useAxios from "./../../../hooks/useAxios";
import Loaders from "./../../../components/Loaders";
import CourseCard from "./../../../components/Cards/CourseCard";
import SetTitle from "../../../components/setTitle";
import { useQuery } from "@tanstack/react-query";
const Classes = () => {
  const { axiosReq } = useAxios();

  const { data: allClasses = [], isLoading } = useQuery({
    queryKey: ["allClasses", axiosReq],
    queryFn: async () => {
      const res = await axiosReq.get("/all-classes");
      return res.data;
    },
  });

  return (
    <main>
      <SetTitle title="Classes - DMF Language Club"></SetTitle>
      <Cover
        heading="Our Classes"
        bgImage="bg-[url('https://i.ibb.co/7GkCnvk/webinar-concept-illustration-114360-4764.jpg')]"
      ></Cover>
      <section>
        {isLoading ? (
          <Loaders></Loaders>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {allClasses.map((item) => (
              <CourseCard key={item._id} item={item}></CourseCard>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Classes;
