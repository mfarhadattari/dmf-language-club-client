import useOrders from "../../hooks/useOrders";
import SetTitle from "./../../components/SetTitle";
const EnrolledClasses = () => {
  const { orders } = useOrders();
  console.log(orders);
  return (
    <main>
      <SetTitle title="Payment - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Enrolled Classes</h1>
      </div>
    </main>
  );
};

export default EnrolledClasses;
