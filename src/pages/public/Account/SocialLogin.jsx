import { FaGithub, FaGoogle } from "react-icons/fa";
import Heading from "../../../components/Heading";

const SocialLogin = () => {
  return (
    <div className="card-body items-center justify-center">
      <Heading></Heading>
      <h1 className="text-center mt-5 mb-3 text-2xl font-bold ">Connect with</h1>
      <div className="flex flex-col gap-5 w-full">
        <button className="btn w-full bg-blue-600 text-white hover:border-2 hover:border-blue-600 hover:text-blue-600">
          <FaGoogle className="text-xl"></FaGoogle>
          Continue With Google
        </button>
        <button className="btn w-full btn-outline border-2 border-blue-600 hover:bg-blue-600 hover:border-0">
          <FaGithub className="text-xl"></FaGithub>
          Continue With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
