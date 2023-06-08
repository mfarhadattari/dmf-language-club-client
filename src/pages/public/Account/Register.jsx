import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingBtn from "../../../components/Button/LoadingBtn";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuthContext from "../../../hooks/useAuthContext";
import { updateProfile } from "firebase/auth";
import SuccessAlert from "../../../components/Message/SuccessAlert";
import FirebaseErrorAlert from "../../../components/Message/FirebaseErrorAlert";
import useAxios from "./../../../hooks/useAxios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordMatched, setPasswordMatched] = useState(null);
  const { createUser } = useAuthContext();
  const { axiosReq } = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* ----------------------------------------------------------
  ! ------------------ From Submit Handler ------------------- */
  const onSubmit = (data, event) => {
    const {
      password,
      confirmPassword,
      email,
      name,
      photoURL,
      gender,
      address,
      phone,
    } = data;
    setLoading(true);
    if (password !== confirmPassword) {
      setPasswordMatched(false);
      setLoading(false);
    } else {
      setPasswordMatched(true);
      createUser(email, password)
        .then(({ user }) => {
          updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
          }).then(() => {
            axiosReq
              .post("/user/create-user", {
                email,
                name,
                photoURL,
                role: "student",
                gender,
                address,
                phone,
              })
              .then(({ data }) => {
                if (data.insertedId || data.isExist) {
                  setLoading(false);
                  SuccessAlert("Successfully Register!");
                  event.target.reset();
                }
              });
          });
        })
        .catch((error) => {
          FirebaseErrorAlert(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <main>
      <section className="my-10">
        <div>
          <div className="card  w-full max-w-3xl mx-auto shadow-2xl bg-base-100">
            <h1 className="text-center mt-5 text-2xl font-bold">
              Create Account
            </h1>
            <form
              className="card-body pb-0 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="form-control w-full">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type == "required" && (
                    <ErrorMessage message="Name is required"></ErrorMessage>
                  )}
                </div>
                <div className="form-control w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                    {...register("email", { required: true })}
                  />
                  {errors.email?.type == "required" && (
                    <ErrorMessage message="Email is required"></ErrorMessage>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="form-control w-full">
                  <div className="relative">
                    <input
                      type={passwordShow ? "text" : "password"}
                      placeholder="Your Password"
                      name="password"
                      className="input input-bordered w-full  border-blue-600 focus:outline-blue-600"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*?[A-Z])(?=.*?[^\w\s])/,
                      })}
                    />
                    {errors.password?.type == "required" && (
                      <ErrorMessage message="Password is required"></ErrorMessage>
                    )}
                    {errors.password?.type == "pattern" && (
                      <ErrorMessage message="Password Must have One Capital Letter and One Special Character"></ErrorMessage>
                    )}
                    {errors.password?.type == "minLength" && (
                      <ErrorMessage message="Password Minimum 6 Character"></ErrorMessage>
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
                <div className="form-control w-full">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="input input-bordered w-full  border-blue-600 focus:outline-blue-600"
                    {...register("confirmPassword", { required: true })}
                  />
                  {errors.confirmPassword?.type == "required" && (
                    <ErrorMessage message="Password is required"></ErrorMessage>
                  )}
                  {passwordMatched === false && (
                    <ErrorMessage message="Password is not matched"></ErrorMessage>
                  )}
                </div>
              </div>

              <div className="form-control w-full">
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL?.type == "required" && (
                  <ErrorMessage message="Photo URL is required"></ErrorMessage>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="form-control w-full">
                  <input
                    type="tel"
                    placeholder="Your Mobile No"
                    name="phone"
                    className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                    {...register("phone")}
                  />
                </div>
                <div className="form-control w-full">
                  <select
                    {...register("gender")}
                    className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
              </div>
              <div className="form-control w-full">
                <textarea
                  placeholder="Your Address"
                  rows={3}
                  name="address"
                  className="border rounded-lg p-3 w-full border-blue-600 focus:outline-blue-600"
                  {...register("address")}
                ></textarea>
              </div>

              <div className="form-control mt-2">
                <LoadingBtn loading={loading} type="submit">
                  Create Account
                </LoadingBtn>
              </div>
            </form>
            <p className="text-center my-5 flex flex-wrap px-5 justify-center">
              {"Already have any account?"}
              <Link to="/login" className="font-bold ms-2">
                Please Login
              </Link>
            </p>
          </div>
          <div className="card w-full max-w-sm mx-auto shadow-2xl bg-base-100 mt-10">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
