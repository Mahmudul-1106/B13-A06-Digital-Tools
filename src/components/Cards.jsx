import React, { use, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const Cards = ({ getPromise, cart, setCart, setShowComponent }) => {
  const data = use(getPromise);

  const [viewProducts, setViewProducts] = useState("products");

  //   console.log(data);
  return (
    <div className="container mx-auto w-10/12 m-20">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>

        <div className="flex items-center justify-center mb-10">
          <button
            onClick={() => {
              setViewProducts("products");
              setShowComponent(false);
            }}
            className={
              viewProducts === "products"
                ? "btn bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white"
                : "btn"
            }
          >
            Products
          </button>
          <button
            onClick={() => {
              setViewProducts("cart");
              setShowComponent(true);
            }}
            className={
              viewProducts === "products"
                ? "btn"
                : "btn bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white"
            }
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {viewProducts === "products" ? (
        <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {data.map((item) => (
            <Card
              key={item.id}
              item={item}
              cart={cart}
              setCart={setCart}
            ></Card>
          ))}
        </div>
      ) : (
        <Cart cart={cart} setCart={setCart}></Cart>
      )}
    </div>
  );
};

export default Cards;
