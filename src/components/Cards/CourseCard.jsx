import { FaChalkboardTeacher } from "react-icons/fa";
import PrimaryBtn from "../Button/PrimaryBtn";

// TODO: Add Image
// TODO: Only Student can select other select btn disabled

const img =
  "https://img.freepik.com/free-vector/font-design-read-book-with-kid-reading-book_1308-81788.jpg?w=740&t=st=1686218355~exp=1686218955~hmac=6dc1d6b9a778b78e087767d30aecddaf977bec7c288d8bc5ebe44233e7d7e062";

const CourseCard = ({ item }) => {
  return (
    <div className="card shadow-2xl">
      <figure>
        <img src={img} alt={item.name} />
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
