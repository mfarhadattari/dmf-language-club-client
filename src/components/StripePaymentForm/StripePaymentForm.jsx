import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SecondaryBtn from "./../Button/SecondaryBtn";
import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorMessage from "./../Message/ErrorMessage";
import ConfirmationAlert from "./../Message/ConfirmationAlert";
import SuccessAlert from "./../Message/SuccessAlert";

const StripePaymentForm = ({ price }) => {
  const stripe = useStripe();
  const element = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !stripe ||
      !element ||
      !clientSecret ||
      paymentProcessing ||
      price < 1
    ) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error.message);
      return;
    }

    setPaymentError("");
    setPaymentProcessing(true);
    ConfirmationAlert(`Sure to payment ${price}?`).then((res) => {
      if (res.isConfirmed) {
        stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card,
              billing_details: {
                name: authUser.displayName,
                email: authUser.email,
              },
            },
          })
          .then((res) => {
            if (res?.paymentIntent?.status === "succeeded") {
              // TODO: REMOVE FROM CART AND SAVE IN ENROLLED
              SuccessAlert("Payment Successfully Complete");
            }
          });
      } else {
        setPaymentProcessing(false);
      }
    });
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
      {paymentError && <ErrorMessage message={paymentError}></ErrorMessage>}

      <SecondaryBtn
        type="submit"
        disabled={!stripe || !element || !clientSecret || paymentProcessing}
      >
        Pay
      </SecondaryBtn>
    </form>
  );
};

export default StripePaymentForm;
