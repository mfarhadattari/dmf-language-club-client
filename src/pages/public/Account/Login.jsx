import loginImg from "../../../assets/images/user.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
import useAuthContext from "./../../../hooks/useAuthContext";
import SuccessAlert from "../../../components/Message/SuccessAlert";
import FirebaseErrorAlert from "../../../components/Message/FirebaseErrorAlert";
import SetTitle from "../../../components/setTitle";
import SecondaryBtn from "../../../components/Button/SecondaryBtn";
const Login = () => {
  // TODO: Forget Password
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const { loginUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  /* ----------------------------------------------------------
  ! ------------------ From Submit Handler ------------------- */
  const onSubmit = (data, event) => {
    setLoading(true);
    loginUser(data.email, data.password)
      .then(() => {
        SuccessAlert("Successfully Login!");
        setLoading(false);
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        FirebaseErrorAlert(error.message);
        setLoading(false);
      });
  };

  return (
    <main>
      <SetTitle title="Login - DMF Language Club"></SetTitle>
      <section className="my-10">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-white text-black">
              <h1 className="text-center mt-5 text-2xl font-bold">
                Please Login
              </h1>
              <img src={loginImg} className="w-36 mx-auto" />
              <form
                className="card-body pb-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <ErrorMessage message="Email is required"></ErrorMessage>
                  )}
                </div>
                <div className="form-control">
                  <div className="relative">
                    <input
                      type={passwordShow ? "text" : "password"}
                      placeholder="Your Password"
                      name="password"
                      className="input input-bordered w-full  border-blue-600 focus:outline-blue-600"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <ErrorMessage message="Password is required"></ErrorMessage>
                    )}
                    <p
                      className="absolute top-4 right-4 text-xl"
                      onClick={() => setPasswordShow(!passwordShow)}
                    >
                      {passwordShow ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </p>
                  </div>
                </div>
                <div className="form-control mt-2">
                  <SecondaryBtn loading={loading} type="submit">
                    Login
                  </SecondaryBtn>
                </div>
              </form>
              <p className="text-center my-5 flex flex-wrap justify-center px-5">
                {"Don't have any account?"}
                <Link to="/register" className="font-bold ms-2">
                  Create Account
                </Link>
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
