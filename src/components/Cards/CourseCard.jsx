import { FaChalkboardTeacher } from "react-icons/fa";
import PrimaryBtn from "../Button/PrimaryBtn";

// TODO: Only Student can select other select btn disabled

const CourseCard = ({ item }) => {
  return (
    <div className="card shadow-2xl">
      <figure>
        <img src={item.image} alt={item.name} className="w-full h-[300px]" />
      </figure>
      <div
        className={`card-body rounded-b-xl ${
          item?.availableSeats < 1 ? "bg-red-300" : "bg-white"
        }`}
      >
        <h2 className="card-title">{item.name}</h2>
        <p className="flex gap-2 text-xl items-center font-semibold">
          <FaChalkboardTeacher></FaChalkboardTeacher> {item.instructorName}
        </p>
        <p className="text-lg">Available: {item.availableSeats}</p>
        <p className="text-lg">Price: {item.price}</p>
        <div className="card-actions">
          <PrimaryBtn disabled={item?.availableSeats < 1 ? true : false}>
            Select
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
