import { useForm } from "react-hook-form";
import LoadingBtn from "./../../../../components/Button/LoadingBtn";
import ErrorMessage from "../../../../components/Message/ErrorMessage";
import contractIMG from "../../../../assets/images/home/contract.svg";
const Contract = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, event) => {
    console.log(data);
  };

  return (
    <section className="hero bg-white py-10">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-5">
        <div className="text-center w-full lg:text-left">
          <img src={contractIMG} alt="" className="h-full w-full" />
        </div>
        <div className="card w-full shadow-2xl bg-base-100 p-5">
          <h1 className="text-center text-3xl my-5">Contract Form</h1>
          <form onSubmit={handleSubmit(sendEmail)} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                name="user_name"
                className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                {...register("user_name", { required: true })}
              />
              {errors.user_name && (
                <ErrorMessage message="Name is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
                {...register("user_email", { required: true })}
              />
              {errors.user_email && (
                <ErrorMessage message="Email is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control">
              <textarea
                name="message"
                rows={4}
                placeholder="Write Message"
                {...register("message", { required: true })}
                className="border rounded-lg p-3 w-full border-blue-600 focus:outline-blue-600"
              />
              {errors.message && (
                <ErrorMessage message="Message is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control">
              <LoadingBtn>Send Message</LoadingBtn>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contract;
