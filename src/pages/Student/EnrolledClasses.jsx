import OrderItem from "../../components/TableRow/OrderItem";
import useOrders from "../../hooks/useOrders";
import SetTitle from "./../../components/SetTitle";
const EnrolledClasses = () => {
  const { orders } = useOrders();
  return (
    <main>
      <SetTitle title="Enrolled Classes - DMF Language Club"></SetTitle>
      <div className="p-5">
        <h1 className="text-center text-3xl font-bold">Enrolled Classes</h1>
      </div>
      <section>
        <div className="overflow-x-auto">
          <table className="table mb-10">
            <thead>
              <tr className="border-b-4 border-blue-600"></tr>
            </thead>
            <tbody>
              {orders.map((orderItem) => (
                <OrderItem
                  key={orderItem._id}
                  orderItem={orderItem}
                ></OrderItem>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default EnrolledClasses;
