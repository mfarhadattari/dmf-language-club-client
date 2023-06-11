const CartItem = ({ index, cartItem }) => {
  return (
    <tr>
      <th className="text-xl font-semibold">{index + 1}</th>
      <td>
        <div className="w-28 h-28 border rounded-lg">
          <img
            className="w-full h-full"
            src={cartItem.image}
            alt={cartItem?.name}
          />
        </div>
      </td>
      <td>
        <p className="font-bold text-xl">{cartItem.name}</p>
        <p className="text-base">Price: ${cartItem.price}</p>
      </td>
      <td>
        <div className="flex flex-col space-y-2 justify-center items-center w-3/4 mx-auto">
          <button className="btn btn-outline text-red-600 border-2 hover:bg-red-600 hover:border-0 w-full">
            Delete
          </button>
          <button className="btn btn-outline text-green-600 border-2 hover:bg-green-600 hover:border-0 w-full">
            Pay
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
