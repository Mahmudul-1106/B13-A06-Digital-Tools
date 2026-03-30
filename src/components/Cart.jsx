import React from "react";
import { toast } from "react-toastify";

// const Cart = ({cart}) => {
//   return (
//     <div>
//       <h2>Welcome to cart</h2>
//     </div>
//   );
// };

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  let finalPrice = totalPrice.toFixed(2);

  const handlePayment = () => {
    setCart([]);
    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = cart.filter((data) => data.id !== item.id);
    setCart(filteredArray);

    toast.success("Item deleted!");
  };

  return (
    <div className=" sm:p-10  sm:w-10/12 mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center mt-5 text-2xl font-bold p-10 bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white rounded-2xl">
          Cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-5 sm:mt-4  rounded-2xl p-5 shadow-2xl">
            {cart.map((item) => (
              <div
                className="sm:flex items-center justify-between bg-base-300 rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <img className="h-12 w-12 object-contain" src={item.icon} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p>
                      ${item.price}/{item.period}
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn  text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between p-5 mt-5 rounded-lg text-xl font-bold">
            <div>Total</div>
            <div>$ {finalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn py-8 w-full bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white text-xl  rounded-lg"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
