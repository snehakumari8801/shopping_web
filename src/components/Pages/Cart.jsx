import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Navbar from "../Navbar";

function CartPage() {
  const { cart, data, numberOfItem, priceOfItem, removeItem } =
    useContext(ProductContext);

  return (
    <div className="text-white">
      <Navbar className="overflow-auto sm:overflow-hidden" />
      <div className="flex flex-col h-[100%]  pb-[600px] bg-black text-white pt-10  pr-16">
        <div className="text-white">
          <h2>Shopping Cart</h2>
          {Object.keys(cart).map((itemId) => {
            const item = data.find((product) => product.id === Number(itemId));
            if (item && cart[itemId] > 0) {
              let desc = item.description.slice(0, 200);
              return (
                <div
                  key={itemId}
                  className="flex flex-col sm:flex-row pl-10 sm:pl-40 pt-28"
                >
                  <img src={item.image} alt="" className=" h-48 w-40 " />
                  <p className="pl-13 sm:pl-48 pt-2 text-start">
                    <p className="text-xl font-semibold text-yellow-500">
                      {item.title}
                    </p>
                    <p className="pt-3">{desc}</p>
                    <p className="mt-1  text-green-500">
                      Quantity: {cart[itemId]}
                    </p>
                    <p className="mt-1 font-bold text-green-500">
                      Price: ${item.price}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-40 bg-red-6 mt-3 pr-2 bg-red-600"
                    >
                      Remove from cart
                    </button>
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className=" h-20 mt-24 w-[260px] sm:w-[400px] border-2 ml-[40px] sm:ml-[500px] pl-16 sm:pl-32 pt-3 bg-[#121212] rounded-3xl">
          <p className="text-xl font-semibold ">
            Total Items: {numberOfItem()}
          </p>
          <p className="">Total Price: ${priceOfItem()}</p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
