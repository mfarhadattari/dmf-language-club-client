import { FaBars } from "react-icons/fa";
import Heading from "../components/Heading";
import NavigationLink from "../components/NavigationLink";

const Dashboard = () => {
  const studentOptions = (
    <>
      <NavigationLink to="student-profile">Profile</NavigationLink>
      <NavigationLink to="selected-class">Selected Class</NavigationLink>
      <NavigationLink to="enrolled-class">Enrolled Class</NavigationLink>
      <NavigationLink to="payment-history">Payment History</NavigationLink>
    </>
  );

  const instructorOptions = (
    <>
      <NavigationLink to="instructor-profile">Profile</NavigationLink>
      <NavigationLink to="add-class">Add Class</NavigationLink>
      <NavigationLink to="my-class">My Class</NavigationLink>
    </>
  );

  const adminOptions = (
    <>
      <NavigationLink to="admin-profile">Profile</NavigationLink>
      <NavigationLink to="manage-class">Manage Class</NavigationLink>
      <NavigationLink to="manage-user">Manage User</NavigationLink>
    </>
  );

  const publicOptions = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/instructors">Classes</NavigationLink>
      <NavigationLink to="/classes">Classes</NavigationLink>
    </>
  );
  return (
    <main className="max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open w-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center relative">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle drawer-button lg:hidden absolute top-2 right-2"
          >
            <FaBars></FaBars>
          </label>
          <div className="py-10">
            <h1>This is Dashboard</h1>
          </div>
        </div>
        <div className="drawer-side w-full">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="h-full bg-base-200 text-base-content flex flex-col items-center pt-10">
            <Heading></Heading>
            <div className="h-full p-10">
              <ul className="menu ">
                {/* Sidebar content here */}
                {studentOptions}
              </ul>
              <div className="divider after:bg-blue-600 before:bg-blue-600"></div>
              <ul className="menu">{publicOptions}</ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
