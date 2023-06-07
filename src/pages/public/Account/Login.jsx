import { useRef, useState } from "react";
import loginImg from "../../../assets/images/user.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingBtn from "../../../components/LoadingBtn";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const passwordRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* ----------------------------------------------------------
  ! ------------------ From Submit Handler ------------------- */
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
  };

  /* ----------------------------------------------
  ! ---------- Password Show Handler ---------------*/

  const passwordShowHandler = () => {
    setPasswordShow(!passwordShow);
    if (passwordShow === false) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  return (
    <main>
      <section className="my-10">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
              <h1 className="text-center mt-5 text-2xl font-bold">
                Please Login
              </h1>
              <img src={loginImg} className="w-40 mx-auto" />
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
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
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Your Password"
                      name="password"
                      className="input input-bordered w-full  border-blue-600 focus:outline-blue-600"
                      ref={passwordRef}
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <ErrorMessage message="Password is required"></ErrorMessage>
                    )}
                    <p
                      className="absolute top-4 right-4 text-xl"
                      onClick={passwordShowHandler}
                    >
                      {passwordShow ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </p>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <LoadingBtn loading={loading} type="submit">
                    Login
                  </LoadingBtn>
                </div>
              </form>
              <p className="text-center mb-5 m-0">
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
