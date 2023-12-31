import Swal from "sweetalert2";

const InstructorClassRow = ({ classItem, index }) => {

  const seeFeedback = (feedback) => {
    Swal.fire({
      title: feedback,
      icon: "info",
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return (
    <tr className="shadow-lg">
      <th className="text-xl font-semibold">{index + 1}</th>
      <td>
        <div className="w-28 h-28 border rounded-lg">
          <img
            className="w-full h-full"
            src={classItem.image}
            alt={classItem?.name}
          />
        </div>
      </td>
      <td>
        <p className="font-bold text-xl">{classItem.name}</p>
        <p className="text-base">Price: ${classItem.price}</p>
      </td>
      <td className="text-base font-semibold">
        <div className="w-fit mx-auto">
          <p>Seat: {classItem?.availableSeats}</p>
          <p>Enrolled: {classItem?.enrolledStudents || 0}</p>
        </div>
      </td>
      <td>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <p
            className={`uppercase text-lg font-semibold ${
              classItem?.status === "approve"
                ? "text-green-600"
                : classItem?.status === "denied"
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {classItem?.status}
          </p>
          <button
            className="btn btn-outline btn-xs"
            onClick={() => seeFeedback(classItem?.feedback)}
            disabled={classItem?.status !== "denied"}
          >
            Feedback
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InstructorClassRow;
