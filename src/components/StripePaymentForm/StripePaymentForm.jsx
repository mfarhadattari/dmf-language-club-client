import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SecondaryBtn from "./../Button/SecondaryBtn";
import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAuthContext from "../../hooks/useAuthContext";

const StripePaymentForm = ({ price }) => {
  const stripe = useStripe();
  const element = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const { secureAxios } = useSecureAxios();
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (price > 0) {
      secureAxios
        .post(`/student/create-payment-intent?email=${authUser.email}`, {
          price,
        })
        .then(({ data }) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [price, secureAxios, authUser]);

  console.log(clientSecret);

  const handleSubmit = () => {
    console.log("comming");
  };
  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <SecondaryBtn
        type="submit"
        disabled={!stripe || !element || !clientSecret}
      >
        Pay
      </SecondaryBtn>
    </form>
  );
};

export default StripePaymentForm;
