import Heading from "../../../components/Heading";
import { FaBars } from "react-icons/fa";
import NavigationLink from "../../../components/NavigationLink";
import useAuthContext from "../../../hooks/useAuthContext";
import Avatar from "../../../components/Avatar";
import ThemeToggle from "../../../components/Button/ThemeToggle";

const NavigationBar = () => {
  const { authUser } = useAuthContext();

  const navItems = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/instructors">Instructor</NavigationLink>
      <NavigationLink to="/classes">Classes</NavigationLink>
      {authUser ? (
        <>
          <NavigationLink to="/dashboard">Dashboard</NavigationLink>
          <Avatar></Avatar>
        </>
      ) : (
        <NavigationLink to="/login">Login</NavigationLink>
      )}
      <ThemeToggle></ThemeToggle>
    </>
  );
  return (
    <nav className="navbar container mx-auto sticky top-0 z-50 bg-white">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <FaBars className="text-3xl"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-40"
          >
            {navItems}
          </ul>
        </div>
        <Heading></Heading>
      </div>
      <div className="navbar-end w-full hidden md:flex ">
        <ul className="menu menu-horizontal px-1 gap-2 items-center">
          {navItems}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
