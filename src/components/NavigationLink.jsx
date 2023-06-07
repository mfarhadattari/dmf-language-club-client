import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <li className="text-xl w-fit font-semibold">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-blue-600 rounded-none p-1" : "p-1"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
