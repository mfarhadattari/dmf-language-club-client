import { FaGithub, FaGoogle } from "react-icons/fa";
import Heading from "../../../components/Heading";
import useAuthContext from "./../../../hooks/useAuthContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import SuccessAlert from "../../../components/Message/SuccessAlert";
import FirebaseErrorAlert from "../../../components/Message/FirebaseErrorAlert";
import useAxios from "../../../hooks/useAxios";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { socialLoginUser } = useAuthContext();
  const { axiosReq } = useAxios();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const handelSocialLogin = (provider) => {
    socialLoginUser(provider)
      .then(({ user }) => {
        axiosReq
          .post("/create-user", {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: "student",
          })
          .then(({ data }) => {
            if (data.insertedId || data.isExist) {
              SuccessAlert("Successfully Login!");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => {
        FirebaseErrorAlert(error.message);
      });
  };
  return (
    <div className="card-body items-center justify-center">
      <Heading></Heading>
      <h1 className="text-center mt-5 mb-3 text-2xl font-bold ">
        Connect with
      </h1>
      <div className="flex flex-col gap-5 w-full">
        <button
          className="btn w-full bg-blue-600 text-white hover:border-2 hover:border-blue-600 hover:text-blue-600"
          onClick={() => handelSocialLogin(googleProvider)}
        >
          <FaGoogle className="text-xl"></FaGoogle>
          Continue With Google
        </button>
        <button
          className="btn w-full btn-outline border-2 border-blue-600 hover:bg-blue-600 hover:border-0"
          onClick={() => handelSocialLogin(githubProvider)}
        >
          <FaGithub className="text-xl"></FaGithub>
          Continue With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
