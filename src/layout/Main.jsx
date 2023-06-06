import { Outlet } from "react-router-dom";
import Footer from "../pages/public/Shared/Footer";
import NavigationBar from "../pages/public/Shared/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
