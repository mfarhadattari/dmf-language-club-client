import SetTitle from "../components/setTitle";
import errorIMG from "../assets/images/404.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <SetTitle title="Page Not Found"></SetTitle>
      <section className="container">
        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center">
            <img src={errorIMG} alt="" className="w-full mx-auto" />
            <h2 className="text-center text-4xl text-red-600">
              Page Not Found
            </h2>
            <Link
              to="/"
              className="btn btn-outline text-green-600 hover:bg-green-600 hover:border-0 mt-5"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
