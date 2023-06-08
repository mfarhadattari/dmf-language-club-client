import { FaChalkboardTeacher } from "react-icons/fa";
const img =
  "https://img.freepik.com/free-vector/font-design-read-book-with-kid-reading-book_1308-81788.jpg?w=740&t=st=1686218355~exp=1686218955~hmac=6dc1d6b9a778b78e087767d30aecddaf977bec7c288d8bc5ebe44233e7d7e062";

const CourseCard = ({ item }) => {
  return (
    <div className="card shadow-2xl">
      <figure>
        <img src={img} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="flex gap-2 text-xl items-center font-semibold">
          <FaChalkboardTeacher></FaChalkboardTeacher> {item.instructorName}
        </p>
        <p className="text-lg">Available: {item.availableSeats}</p>
        <p className="text-lg">Price: {item.price}</p>
        <div className="card-actions">
          <button className="btn btn-outline text-blue-600 border-2 hover:bg-blue-600 hover:text-white hover:border-0 w-full">Select</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
