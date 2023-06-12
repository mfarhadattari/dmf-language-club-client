import { FaChalkboardTeacher } from "react-icons/fa";
import PrimaryBtn from "../Button/PrimaryBtn";
import useUserRole from "../../hooks/useUserRole";
import useAuthContext from "../../hooks/useAuthContext";
import ConfirmationAlert from "../Message/ConfirmationAlert";
import { useLocation, useNavigate } from "react-router-dom";
import useSecureAxios from "../../hooks/useSecureAxios";
import SuccessAlert from "../Message/SuccessAlert";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const CourseCard = ({ item }) => {
  const { userRole, roleLoading } = useUserRole();
  const { authUser, authLoading } = useAuthContext();
  const { secureAxios } = useSecureAxios();

  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { data: status = null, refetch } = useQuery({
    queryKey: ["status", authUser, item, secureAxios],
    queryFn: async () => {
      if (authUser) {
        const res = await secureAxios.get(
          `/student/check-class/${item._id}?email=${authUser?.email}`
        );
        return res.data.status;
      } else {
        return null;
      }
    },
    enabled: !authLoading,
  });

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
        instructorEmail: classItem.instructorEmail,
        image: classItem.image,
        price: classItem.price,
      };
      secureAxios
        .post(`student/add-to-cart?email=${authUser.email}`, cart)
        .then(({ data }) => {
          if (data.insertedId) {
            SuccessAlert("Successfully Selected!");
            refetch();
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
              roleLoading ||
              userRole === "admin" ||
              userRole === "instructor" ||
              status === "enrolled" ||
              status === "selected"
            }
            loading={loading}
          >
            <span
              className={`${
                (status === "enrolled" || status === "selected") &&
                "text-red-600 font-bold"
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
