import { useEffect, useState } from "react";
import SetTitle from "../../components/setTitle";
import useAuthContext from "./../../hooks/useAuthContext";
import useSecureAxios from "./../../hooks/useSecureAxios";

const PaymentHistory = () => {
  const { authUser } = useAuthContext();
  const { secureAxios } = useSecureAxios();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    secureAxios
      .get(`/student/payment-history?email=${authUser?.email}`)
      .then(({ data }) => {
        setPayments(data);
      });
  }, [authUser, secureAxios]);

  console.log(payments);
  return (
    <main>
      <SetTitle title="Payment History - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Payment History</h1>
      </div>
    </main>
  );
};

export default PaymentHistory;
