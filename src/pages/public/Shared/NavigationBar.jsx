import Heading from "../../../components/Heading";
import { FaBars } from "react-icons/fa";
import NavigationLink from "../../../components/NavigationLink";

const NavigationBar = () => {
  const navItems = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/instructor">Instructor</NavigationLink>
      <NavigationLink to="/classes">Classes</NavigationLink>
      <NavigationLink to="/login">Login</NavigationLink>
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
      <div className="navbar-end w-full hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
