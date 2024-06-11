import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Card from '../Card';
import Navbar from '../Navbar';

function Men(props) {
  console.log(props)
  const { data } = useContext(ProductContext);
  const filteredProducts = data.filter(item => item.category === props.category);

  return (
    <div className='bg-black h-[100%] text-white pb-[100px]'>
    <Navbar/>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-12 mt-[90px] pt-[70px] mr-[23px] pl-10 text-white'>
       {
        filteredProducts.map((item)=> <Card key={item.id} title={item.title} image={item.image} price={item.price} id={item.id}/>
      )
       }
       
    </div>
    </div>
  )
}

export default Men