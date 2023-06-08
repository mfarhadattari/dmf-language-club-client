import { useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import { useState } from "react";
import Cover from "../../../../components/Cover";

const Reviews = () => {
  const { axiosReq } = useAxios();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosReq.get("/reviews").then(({ data }) => {
      setReviews(data);
    });
  }, [axiosReq]);
  console.log(reviews);
  return (
    <section>
      <Cover bgImage={"bg-review-bg"} heading="Testimonials"></Cover>
    </section>
  );
};

export default Reviews;
