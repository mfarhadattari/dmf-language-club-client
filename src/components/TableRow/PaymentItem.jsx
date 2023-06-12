const PaymentItem = ({ paymentItem, index }) => {
  return (
    <tr className="hover:shadow-lg">
      <th>{index + 1}</th>
      <td>
        <h1 className="font-bold text-xl">{paymentItem?.className}</h1>
        <p className="text-base font-bold">Amount: ${paymentItem.amount}</p>
      </td>
      <td className="font-bold">
        <p>Payment Time : {paymentItem.paymentTime}</p>
        <p>Transition ID: {paymentItem.transitionId}</p>
      </td>
    </tr>
  );
};

export default PaymentItem;
