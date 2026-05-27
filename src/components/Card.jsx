import React from 'react';
import image1 from '../assets/image1.avif';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useContext,useEffect } from 'react';
import { dataContext } from '../context/UserContext';

const Card = ({name,image,id,price,type}) => {

  let {cart,setCart,count,setCount} = useContext(dataContext);
    function AddToCart(item){
        setCart([...cart,item])

    }
function increment(){
  setCount(count+1);
}

  return (
    <div className ='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 transition-all'>
      <div className ='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img className='object-cover rounded-lg' src={image} alt="Food Item" />
      </div>
      <div className ='text-2xl font-semibold '>
  {name}
      </div>
      <div className='w-full flex  justify-between items-center'>
      <div className='text-lg font-bold text-green-500'>{price}</div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-bold '>
            {type==="veg"?<LuLeafyGreen /> :<GiChickenOven />
 }
            <span>{type}</span></div>
    </div>
    <button className='w-full p-3 bg-green-400 rounded-lg text-white hover:bg-green-600 cursor-pointer transition-all duration-500'onClick={()=>{increment();AddToCart({name,image,id,price,type})}}>Add to Dish</button>
    </div>
  );
}

export default Card;
