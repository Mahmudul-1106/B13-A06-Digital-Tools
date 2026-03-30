import React, { use } from "react";
import Card from "./Card";

const Cards = ({ getPromise }) => {
  const data = use(getPromise);

  console.log(data);
  return (
    <div className="container mx-auto w-10/12 m-10">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>

        <div className="flex items-center justify-center">
          <button className="btn bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white">
            Products
          </button>
          <button className="btn">Cart (2)</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {data.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
