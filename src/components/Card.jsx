import React, { useContext, useEffect, useState } from "react";
import { TbShoppingBagPlus, TbShoppingBagMinus } from "react-icons/tb";
import { ProductContext } from "../context/ProductContext";

function Card({ title, image, price, id }) {
  const [addToCart, setAddToCart] = useState(false);
  let titlee = title.slice(0, 30);
  const { addItem, removeItem } = useContext(ProductContext);

  useEffect(() => {
    setAddToCart(false);
  }, []);

  return (
    <div className="bg-[#121212] h-[350px] sm:h-[410px] w-[250px] rounded-xl ml-5 pb-6">
      <img
        src={image}
        alt=""
        className="h-[240px] sm:h-[300px] w-[250px] sm:w-[300px]"
      />
      <p className="pt-1 text-center">{titlee}</p>
      <div className="flex justify-around mt-4">
        <div>
          <span className="text-xl font-semibold mt-5">₹ {price}</span>
          <del className="ml-2 mt-5">999</del>
          <span className="ml-2 text-green-500 mt-5">(50% off)</span>
        </div>
        <div>
          {addToCart ? (
            <TbShoppingBagMinus
              onClick={() => {
                removeItem(id);
                setAddToCart(false);
              }}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <TbShoppingBagPlus
              onClick={() => {
                addItem(id);
                setAddToCart(true);
              }}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
