import React from 'react';
import image1 from "../assets/image1.avif"
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext } from 'react';
import { dataContext } from '../context/UserContext';

const Card2 = ({key,name,image,id,price,type}) => {
let {cart,setCart,setCount} = useContext(dataContext);

function removeItem(id){
  let newCart = cart.filter((item)=>item.id !== id);
  setCart(newCart);
  setCount((prevCount) => prevCount - 1);
}


return (
  <div>
      <div key={key} className='w-full h-30 p-2 shadow-lg flex justify-between overflow-y-auto auto top-20 right-0 bg-white rounded-lg mb-5'>
        <div className='w-[60%] h-full flex gap-5'>
          <div className='w-[50%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
          </div>
          <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-500 font-semibold'>{name}</div>
            <div className='w-27.5 h-12.5 bg-slate-400 flex rounded-lg overflow-hidden font-semibold shadow-lg border-2 border-green-300 text-xl'>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-400'>-</button>
              <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>1</span>
              <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-400'>+</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
          <span className='text-xl text-green-400 font-semibold'>Rs 499/-</span>
          <RiDeleteBinLine className='w-7.5 h-7.5 text-red-400 transition-all duration-200 hover:scale-110 hover:rotate-30'  onClick={() => {removeItem(id)}} />
        </div>

      </div>
  
  </div>
 
  );
}

export default Card2;
