import { FaBars } from "react-icons/fa";
import Heading from "../components/Heading";
import NavigationLink from "../components/NavigationLink";
import useUserRole from "../hooks/useUserRole";
import { Outlet } from "react-router-dom";
import Avatar from "./../components/Avatar";
import ThemeToggle from "../components/Button/ThemeToggle";

const Dashboard = () => {
  const { userRole, roleLoading } = useUserRole();

  const studentOptions = (
    <>
      <NavigationLink to="student-home">Student Home</NavigationLink>
      <NavigationLink to="selected-class">Selected Class</NavigationLink>
      <NavigationLink to="enrolled-class">Enrolled Class</NavigationLink>
      <NavigationLink to="payment-history">Payment History</NavigationLink>
    </>
  );

  const instructorOptions = (
    <>
      <NavigationLink to="instructor-home">Instructor Home</NavigationLink>
      <NavigationLink to="add-class">Add Class</NavigationLink>
      <NavigationLink to="my-class">My Class</NavigationLink>
    </>
  );

  const adminOptions = (
    <>
      <NavigationLink to="admin-home">Admin Home</NavigationLink>
      <NavigationLink to="manage-class">Manage Class</NavigationLink>
      <NavigationLink to="manage-user">Manage User</NavigationLink>
    </>
  );

  const publicOptions = (
    <>
      <ThemeToggle></ThemeToggle>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/instructors">Instructors</NavigationLink>
      <NavigationLink to="/classes">Classes</NavigationLink>
    </>
  );
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open w-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-11/12 mx-auto">
          <div className="py-10">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle drawer-button lg:hidden absolute top-2 right-2"
          >
            <FaBars></FaBars>
          </label>
        </div>
        <div className="drawer-side w-full h-full">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="h-full bg-base-200 text-base-content flex flex-col items-center pt-10">
            <Heading></Heading>
            <div className="h-full px-20 py-10">
              <Avatar></Avatar>
              {!roleLoading && (
                <ul className="menu ">
                  {userRole == "admin"
                    ? adminOptions
                    : userRole == "instructor"
                    ? instructorOptions
                    : studentOptions}
                </ul>
              )}
              <div className="divider after:bg-blue-600 before:bg-blue-600"></div>
              <ul className="menu">{publicOptions}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
