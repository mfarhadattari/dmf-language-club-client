import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/Message/ErrorMessage";
import SuccessAlert from "../../components/Message/SuccessAlert";
import SetTitle from "../../components/setTitle";
import useAuthContext from "../../hooks/useAuthContext";
import useSecureAxios from "../../hooks/useSecureAxios";
import axios from "axios";
import ErrorAlert from "../../components/Message/ErrorAlert";
import { useState } from "react";
import LoadingBtn from "../../components/Button/LoadingBtn";

const AddClass = () => {
  // TODO: Add a class Functionality
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addClass = (data, event) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios
      .post(import.meta.env.VITE_IMG_HOSTING, formData)
      .then((res) => {
        if (res.data.success) {
          const classInfo = {
            name: data.name,
            image: res.data.data.url,
            instructorName: data.instructorName,
            instructorEmail: data.instructorEmail,
            availableSeats: parseInt(data.availableSeats),
            enrolledStudent: 0,
            price: parseFloat(data.price),
            status: "pending",
          };

          secureAxios
            .post(`/instructor/add-class?email=${authUser.email}`, classInfo)
            .then(({ data }) => {
              if (data.insertedId) {
                SuccessAlert("Added Successfully");
                setLoading(false);
                event.target.reset();
              }
            });
        }
      })
      .catch((error) => {
        ErrorAlert(error.message);
        setLoading(false);
      });
  };

  return (
    <main>
      <SetTitle title="Add Class - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Add A Class</h1>
      </div>
      <section className="card w-full shadow-2xl bg-base-100 mt-10 ">
        <form className="card-body " onSubmit={handleSubmit(addClass)}>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold">
                  Class Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Class Name"
                className="input input-bordered border-blue-600 focus:outline-blue-600"
                {...register("name", { required: true })}
              />
              {errors.name?.type == "required" && (
                <ErrorMessage message="Class name is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold">
                  Class Photo
                </span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered border-blue-600 focus:outline-blue-600"
              />
              {errors.photo?.type == "required" && (
                <ErrorMessage message="File is required"></ErrorMessage>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold">
                  Instructor Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={authUser.displayName}
                readOnly
                className="input input-bordered border-blue-600 focus:outline-blue-600"
                {...register("instructorName", { required: true })}
              />
              {errors.instructorName?.type == "required" && (
                <ErrorMessage message="Instructor name is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold">
                  Instructor Email
                </span>
              </label>
              <input
                type="email"
                defaultValue={authUser.email}
                readOnly
                className="input input-bordered border-blue-600 focus:outline-blue-600"
                {...register("instructorEmail", { required: true })}
              />
              {errors.instructorEmail?.type == "required" && (
                <ErrorMessage message="Instructor email is required"></ErrorMessage>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold">
                  Available Seats
                </span>
              </label>
              <input
                type="number"
                placeholder="Available Seats"
                className="input input-bordered border-blue-600 focus:outline-blue-600"
                {...register("availableSeats", { required: true, min: 0 })}
              />
              {errors.availableSeats?.type == "required" && (
                <ErrorMessage message="Available Seats is required"></ErrorMessage>
              )}
              {errors.availableSeats?.type == "min" && (
                <ErrorMessage message="Available seats is not less then 0"></ErrorMessage>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base font-bold">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered border-blue-600 focus:outline-blue-600"
                {...register("price", { required: true, min: 1 })}
              />
              {errors.price?.type == "required" && (
                <ErrorMessage message="Price is required"></ErrorMessage>
              )}
              {errors.price?.type == "min" && (
                <ErrorMessage message="Price is not less then 1"></ErrorMessage>
              )}
            </div>
          </div>

          <div className="form-control mt-6">
            <LoadingBtn loading={loading}>Add Class</LoadingBtn>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AddClass;
