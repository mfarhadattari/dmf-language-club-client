const ClassRow = ({ classItem, index }) => {
  return (
    <tr>
      <th className="text-xl font-semibold">{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="w-28 h-28 border rounded-lg">
            <img
              src="https://img.freepik.com/free-vector/font-design-read-book-with-kid-reading-book_1308-81788.jpg?w=740&t=st=1686218355~exp=1686218955~hmac=6dc1d6b9a778b78e087767d30aecddaf977bec7c288d8bc5ebe44233e7d7e062"
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
        <p>Status: {classItem?.status}</p>
        <p>Seat: {classItem?.availableSeats}</p>
        <p>Price: {classItem?.enrolledStudents}</p>
      </td>
      <th className="flex flex-col space-y-2 justify-center">
        <button className="btn btn-outline btn-xs text-green-600 hover:bg-green-600 hover:border-0">Approve</button>
        <button className="btn btn-outline btn-xs text-red-600 hover:bg-red-600 hover:border-0">Deny</button>
        <button className="btn btn-outline btn-xs">Feedback</button>
      </th>
    </tr>
  );
};

export default ClassRow;
