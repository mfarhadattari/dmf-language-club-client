import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SecondaryBtn from "./../Button/SecondaryBtn";
import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorMessage from "./../Message/ErrorMessage";
import ConfirmationAlert from "./../Message/ConfirmationAlert";
import SuccessAlert from "./../Message/SuccessAlert";
import moment from "moment/moment";

const StripePaymentForm = ({ item }) => {
  const stripe = useStripe();
  const element = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const { secureAxios } = useSecureAxios();
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (item.price > 0) {
      secureAxios
        .post(`/student/create-payment-intent?email=${authUser.email}`, {
          price: item.price,
        })
        .then(({ data }) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [item, secureAxios, authUser]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !stripe ||
      !element ||
      !clientSecret ||
      paymentProcessing ||
      item.price < 1
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
    ConfirmationAlert(`Sure to payment ${item.price}?`).then((res) => {
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
              const orderInfo = {
                name: authUser.displayName,
                email: authUser.email,
                transitionId: res.paymentIntent.id,
                amount: item.price,
                paymentTime: moment().format("MMMM DD YYYY , HH:mm:ss"),
                classId: item.classId,
                className: item.name,
                image: item.image,
                instructorName: item.instructorName,
                instructorEmail: item.instructorEmail,
                cartId: item._id,
              };
              secureAxios
                .post(
                  `/student/order-confirm?email=${authUser.email}`,
                  orderInfo
                )
                .then(({ data }) => {
                  if (data.insertedId) {
                    SuccessAlert("Payment Successfully Complete");
                    event.target.reset();
                  }
                });
            }
          });
      } else {
        setPaymentProcessing(false);
      }
    });
  };
  return (
    <div className="w-3/4 mx-auto">
      {item && (
        <div className="my-10 flex gap-5">
          <img src={item.image} className="w-40 h-28 rounded-md" />
          <div>
            <h1 className="text-2xl">{item.name}</h1>
            <h3 className="text-lg font-semibold">Price: ${item.price}</h3>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
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

        <div className="mt-5">
          <SecondaryBtn
            type="submit"
            disabled={
              !stripe || !element || !clientSecret || paymentProcessing || !item
            }
          >
            Pay {item && item?.price}
          </SecondaryBtn>
        </div>
      </form>
    </div>
  );
};

export default StripePaymentForm;
