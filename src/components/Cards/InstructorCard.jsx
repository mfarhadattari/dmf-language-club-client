import { Link } from "react-router-dom";
import SecondaryBtn from "../Button/SecondaryBtn";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="card shadow-2xl bg-white text-black">
      <figure className="px-10 p-5">
        <img
          src={instructor.photoURL}
          alt={instructor.displayName}
          className="h-[200px] rounded-full"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{instructor.displayName}</h2>
        <p className="text-lg">{instructor.email}</p>
        <div className="flex gap-5">
          <p>Total Class: {instructor.totalClass || 0}</p>
          <p>Total Student: {instructor.totalStudent || 0}</p>
        </div>
        <Link
          to={`/instructors/${instructor._id}`}
          className="card-actions w-full"
        >
          <SecondaryBtn>See Classes</SecondaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
