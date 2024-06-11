import React from "react";
import { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../context/ProductContext";

function Cards() {
  const { data, loading, error } = useContext(ProductContext);
  console.log(data)
  
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No products available.</div>; 
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 mt-[90px] pt-[70px] mr-[23px] pl-10 rounded-xl">
      {data.map((item) => (
        <Card key={item.id} title={item.title} image={item.image} price={item.price} id={item.id}/>
      ))}
    </div>
  );
}

export default Cards;
