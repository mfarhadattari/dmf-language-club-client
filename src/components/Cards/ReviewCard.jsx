import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ReviewCard = ({ review }) => {
  return (
    <div className="block w-full object-cover h-full bg-white text-black rounded-md pt-5">
      <div className="card shadow-2xl h-[95%]">
        <figure>
          <img
            src={review.photoURL}
            alt={review.name}
            className="h-[100px] rounded-full"
          />
        </figure>
        <div className="card-body items-center">
          <Rating style={{ maxWidth: 80 }} value={review.rating} readOnly />
          <h2 className="card-title">{review.name}</h2>
          <p className="text-lg">{review.message.slice(0, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
