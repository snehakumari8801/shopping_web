import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { numberOfItem } = useContext(ProductContext);

  return (
    <div className="h-32 sm:h-24 w-[100%] flex pt-6 cursor-pointer bg-[#121212] fixed top-0 overflow-auto sm:overflow-hidden">
      <div className="flex justify-evenly text-2xl pl-2 sm:pl-20 gap-10 sm:gap-20 ">
        <Link to="/" className="hover:text-yellow-600">
          Home
        </Link>
        <Link to="/men" className="hover:text-yellow-600">
          Men
        </Link>
        <Link to="/women" className="hover:text-yellow-600">
          Women
        </Link>
        <Link to="/electronics" className="hover:text-yellow-600">
          Electronics
        </Link>
        <Link to="/signin" className="hover:text-yellow-600">
          Sign in
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <FaCartPlus className="text-[40px] ml-[-500px] sm:ml-[350px] sm:mt-[32px] mt-[60px]" />
        </Link>
        <p className=" ml-[-490px] sm:ml-[363px] bg-yellow-400 mt-[-59px] h-6 w-6 text-center rounded-full text-black ">
          {numberOfItem()}
        </p>
      </div>
    </div>
  );
}

export default Navbar;

//export default Navbar;
