import { Outlet } from "react-router-dom";
import Footer from "../pages/public/Shared/Footer";
import NavigationBar from "../pages/public/Shared/NavigationBar";

const Main = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col justify-between">
      <div>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
