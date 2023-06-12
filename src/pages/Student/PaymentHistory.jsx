import { useEffect, useState } from "react";
import SetTitle from "../../components/setTitle";
import useAuthContext from "./../../hooks/useAuthContext";
import useSecureAxios from "./../../hooks/useSecureAxios";
import PaymentItem from "../../components/TableRow/PaymentItem";

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

  return (
    <main>
      <SetTitle title="Payment History - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Payment History</h1>
      </div>
      <section>
        <div className="overflow-x-auto">
          <table className="table mb-10">
            <thead>
              <tr className="border-b-4 border-blue-600 text-lg">
                <th>#</th>
                <th>Name & Price</th>
                <th>Payment Info</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((paymentItem, index) => (
                <PaymentItem
                  key={paymentItem._id}
                  paymentItem={paymentItem}
                  index={index}
                ></PaymentItem>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default PaymentHistory;
