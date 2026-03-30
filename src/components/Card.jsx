import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ item, cart, setCart }) => {
  //   console.log(item);

  const [isSubcribed, setIsSubscribed] = useState(false);

  const handleAddCart = (item) => {
    setIsSubscribed(true);

    const isFound = cart.find((data) => data.id === item.id);

    if (isFound) {
      toast.error("Already Added to Cart");
      return;
    }

    const newCart = [...cart, item];
    setCart(newCart);
    toast.success("Item added to cart!");
  };

  console.log(cart);

  return (
    <div className="card w-full bg-base-200 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between flex-1">
          <img className="w-12 h-12" src={item.icon} alt="" />
          <span
            className={
              item.tagType === "popular"
                ? "badge bg-[#E1E7FF] text-[#9514FA]"
                : item.tagType === "best-seller"
                  ? "badge bg-[#FEF3C6] text-[#BB4D00]"
                  : "badge bg-[#DBFCE7] text-[#0A883E]"
            }
          >
            {item.tag}
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <p>{item.description}</p>
          <span className="text-xl">
            $<span className="text-2xl font-bold">{item.price}</span>/
            <span>{item.period}</span>
          </span>
        </div>
        {item.features.map((feature, index) => (
          <ul className="mt-2 flex flex-col gap-2 text-xs" key={index}>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          </ul>
        ))}

        <div className="mt-6">
          <button
            className={
              isSubcribed
                ? "btn bg-linear-to-r from-cyan-500 to-blue-500 text-white btn-block"
                : "btn bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white btn-block"
            }
            onClick={() => handleAddCart(item)}
          >
            {isSubcribed ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
