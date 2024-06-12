//

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(cart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        //console.log(response)
        setData(response.data);
        setLoading(false);
      } catch (error) {
        //console.error('Error fetching data:', error);
        setError("Product not fetched");
      }
    };

    fetchData();

    return () => {};
  }, []);

  const addItem = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] > 0 ? prevCart[itemId] - 1 : 0,
    }));
  };

  const numberOfItem = () => {
    let totalAmount = 0;
    for (const i in cart) {
      if (cart[i] > 0) {
        totalAmount += cart[i];
      }
    }
    return totalAmount;
  };

  const priceOfItem = () => {
    let totalprice = 0;
    for (let i in cart) {
      if (cart[i] > 0) {
        const productPrice = data.find((d) => d.id === Number(i));
        totalprice += productPrice.price * cart[i];
      }
    }
    return totalprice;
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        data,
        addItem,
        removeItem,
        priceOfItem,
        numberOfItem,
        loading,
        error,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
