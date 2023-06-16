import { useParams } from "react-router-dom";
import SetTitle from "../../components/setTitle";
import useAuthContext from "../../hooks/useAuthContext";
import useSecureAxios from "../../hooks/useSecureAxios";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePaymentForm from "./../../components/StripePaymentForm/StripePaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const { id } = useParams();
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [item, setItem] = useState({});

  useEffect(() => {
    secureAxios
      .get(`/student/cart-item-info/${id}?email=${authUser.email}`)
      .then(({ data }) => {
        setItem(data);
      });
  }, [secureAxios, authUser, id]);

  return (
    <main>
      <SetTitle title="Payment - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Payment</h1>
      </div>
      <div className="md:w-3/4 mx-auto">
        <Elements stripe={stripePromise}>
          <StripePaymentForm item={item}></StripePaymentForm>
        </Elements>
      </div>
    </main>
  );
};

export default Payment;
