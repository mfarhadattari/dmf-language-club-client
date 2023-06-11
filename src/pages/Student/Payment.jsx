import { useParams } from "react-router-dom";
import SetTitle from "../../components/setTitle";
import useAuthContext from "../../hooks/useAuthContext";
import useSecureAxios from "../../hooks/useSecureAxios";
import { useEffect, useState } from "react";

const Payment = () => {
  const { id } = useParams();
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [info, setInfo] = useState({});

  useEffect(() => {
    secureAxios
      .get(`/student/cart-item-info/${id}?email=${authUser.email}`)
      .then(({ data }) => {
        setInfo(data);
      });
  }, [secureAxios, authUser, id]);

  console.log(info?.price);

  return (
    <main>
      <SetTitle title="Payment - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Payment</h1>
      </div>
    </main>
  );
};

export default Payment;
