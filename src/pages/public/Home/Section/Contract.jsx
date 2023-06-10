import emailjs from "@emailjs/browser";
import { useRef } from "react";
import SuccessAlert from "./../../../../components/Message/SuccessAlert";
import LoadingBtn from "./../../../../components/Button/LoadingBtn";
import contractIMG from "../../../../assets/images/home/contract.svg";
import { useState } from "react";

const Contract = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  (function () {
    emailjs.init("4X1n16MIffv1h3it4");
  })();

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILSERVICEID,
        import.meta.env.VITE_EMAILTEMPLETEID,
        form.current,
        "4X1n16MIffv1h3it4"
      )
      .then((result) => {
        if (result.text === "OK") {
          SuccessAlert("Message Send Successfully!");
          event.target.reset();
          setLoading(false);
        }
      });
  };

  return (
    <section className="hero bg-white py-10">
      <div className="hero-content flex-col lg:flex-row-reverse items-center gap-5">
        <div className="text-center w-full lg:text-left">
          <img src={contractIMG} alt="" className="h-full w-full" />
        </div>
        <div className="card w-full shadow-2xl bg-base-100 p-5">
          <h1 className="text-center text-3xl my-5">Contract Form</h1>
          <form onSubmit={sendEmail} ref={form} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className="input input-bordered w-full border-blue-600 focus:outline-blue-600"
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                rows={4}
                placeholder="Write Message"
                required
                className="border rounded-lg p-3 w-full border-blue-600 focus:outline-blue-600"
              />
            </div>
            <div className="form-control">
              <LoadingBtn loading={loading}>Send Message</LoadingBtn>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contract;
