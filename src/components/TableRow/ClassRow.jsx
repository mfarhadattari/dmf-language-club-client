const ClassRow = ({ classItem, index, approveClass, deniedClass }) => {
  return (
    <tr>
      <th className="text-xl font-semibold">{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="w-28 h-28 border rounded-lg">
            <img
              className="w-full h-full"
              src={classItem.image}
              alt={classItem?.name}
            />
          </div>
          <div>{classItem?.name}</div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{classItem.instructorName}</div>
          <div className="text-sm opacity-50">{classItem.instructorEmail}</div>
        </div>
      </td>
      <td className="text-base font-semibold">
        <p
          className={`uppercase ${
            classItem?.status === "approve"
              ? "text-green-600"
              : classItem?.status === "denied"
              ? "text-red-600"
              : "text-blue-600"
          }`}
        >
          {classItem?.status || "PENDING"}
        </p>
        <p>Seat: {classItem?.availableSeats}</p>
        <p>Price: ${classItem?.price}</p>
      </td>
      <td>
        <div className="flex flex-col space-y-2 justify-center">
          <button
            className="btn btn-outline btn-xs text-green-600 hover:bg-green-600 hover:border-0"
            onClick={() => approveClass(classItem._id)}
            disabled={
              classItem.status === "denied" || classItem.status === "approve"
            }
          >
            Approve
          </button>
          <button
            className="btn btn-outline btn-xs text-red-600 hover:bg-red-600 hover:border-0"
            onClick={() => deniedClass(classItem._id)}
            disabled={
              classItem.status === "denied" || classItem.status === "approve"
            }
          >
            Deny
          </button>
          <button
            className="btn bg-blue-600 btn-xs text-white"
            disabled={classItem.status !== "denied"}
          >
            Feedback
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ClassRow;
