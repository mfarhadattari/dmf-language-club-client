import SecondaryBtn from "../Button/SecondaryBtn";

const OrderItem = ({ orderItem }) => {
  return (
    <tr className="shadow-lg">
      <td>
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="mask w-56 h-40">
              <img src={orderItem?.image} alt={orderItem?.className} />
            </div>
          </div>
          <div className="h-full">
            <div>
              <h1 className="font-bold text-2xl">{orderItem?.className}</h1>
              <h3 className="text-lg font-semibold">
                By {orderItem.instructorName}
              </h3>
            </div>
            <div className="mt-7">
              <SecondaryBtn>Continue</SecondaryBtn>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
