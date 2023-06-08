import { useEffect } from "react";
import useAxios from "../../../../hooks/useAxios";
import { useState } from "react";
import Cover from "../../../../components/Cover";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReviewCard from "../../../../components/Cards/ReviewCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <section className="py-10">
      <Cover bgImage={"bg-review-bg"} heading="Testimonials"></Cover>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-[400px]"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} className="w-4/6 h-full">
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
