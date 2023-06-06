import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <li className="text-xl w-fit">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-blue-600 rounded-none p-0" : "p-0"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
