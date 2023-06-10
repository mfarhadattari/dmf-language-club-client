const UserRow = ({ user, index }) => {
  return (
    <tr className="hover:border">
      <th className="text-xl">{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-circle w-20 h-20">
            <img src={user?.photoURL} alt={user?.name} />
          </div>
        </div>
      </td>
      <td>
        <h1 className="text-xl font-bold">{user?.name}</h1>
        <p className="text-lg">{user?.email}</p>
      </td>
      <td className="uppercase font-semibold text-center">{user?.role}</td>
      <th>
        <div className="flex flex-col space-y-3">
          <button
            className="btn btn-outline text-green-600 px-0 hover:bg-green-600 hover:border-0"
            disabled={user?.role === "instructor" || user?.role === "admin"}
          >
            Make Instructor
          </button>
          <button
            className="btn btn-outline text-red-600 px-0 hover:bg-red-600 hover:border-0"
            disabled={user?.role === "admin"}
          >
            Make Admin
          </button>
        </div>
      </th>
    </tr>
  );
};

export default UserRow;
