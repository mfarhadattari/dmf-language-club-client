import { FaChalkboardTeacher } from "react-icons/fa";
import PrimaryBtn from "../Button/PrimaryBtn";
import useUserRole from "../../hooks/useUserRole";
import useAuthContext from "../../hooks/useAuthContext";
import ConfirmationAlert from "../Message/ConfirmationAlert";
import { useLocation, useNavigate } from "react-router-dom";
import useSecureAxios from "../../hooks/useSecureAxios";
import SuccessAlert from "../Message/SuccessAlert";
import { useEffect, useState } from "react";

// TODO: Only Student can select other select btn disabled

const CourseCard = ({ item }) => {
  const { userRole } = useUserRole();
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("selected");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      secureAxios
        .get(`/student/check-class/${item._id}?email=${authUser.email}`)
        .then(({ data }) => {
          setStatus(data.status);
        });
    }
  }, [authUser, item, secureAxios]);

  // !------------------- Select Class ----------------! //
  const selectClass = (classItem) => {
    if (!authUser) {
      ConfirmationAlert("Please login first!").then((res) => {
        if (res.isConfirmed) {
          navigate("/login", { replace: true, state: { from: location } });
        }
      });
    } else {
      setLoading(true);
      const cart = {
        displayName: authUser.displayName,
        email: authUser.email,
        classId: classItem._id,
        name: classItem.name,
        instructorName: classItem.instructorName,
        image: classItem.image,
        price: classItem.price,
      };
      secureAxios
        .post(`student/add-to-cart?email=${authUser.email}`, cart)
        .then(({ data }) => {
          if (data.insertedId) {
            SuccessAlert("Successfully Selected!");
            setLoading(false);
          }
        });
    }
  };

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
        <div className="flex justify-between">
          <p className="text-lg">Available Seat: {item.availableSeats}</p>
          <p className="text-lg">Price: {item.price}</p>
        </div>
        <div className="card-actions">
          <PrimaryBtn
            onClick={() => selectClass(item)}
            disabled={
              item?.availableSeats < 1 ||
              userRole === "admin" ||
              userRole === "instructor" ||
              status === "enrolled" ||
              status === "selected"
            }
            loading={loading}
          >
            <span
              className={`${
                status === "enrolled" ||
                (status === "selected" && "text-red-600 font-bold")
              }`}
            >
              {status === "enrolled"
                ? "Enrolled"
                : status === "selected"
                ? "Selected"
                : "Select"}
            </span>
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
