import React, { useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from 'react';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
function Nav() {
  let {input,setInput,cate,setCate,showcart,setShowCart,count,setCount} = useContext(dataContext);

  useEffect(()=>{
    setCate(food_items.filter((item)=>item.food_name.toLowerCase().includes(input)))
  },[input])

  return (
    <div className='w-full h-[100px] flex justify-between items-center  px-5 md:px-8'>

   <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
    <MdFastfood className='w-[30px] h-[30px] text-green-400' />
   </div>

   <form className='w-[40%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[60%]'>
    <FaSearch  className='text-green-500 w-[20px] h-[20px] 'onSubmit={(e)=>e.preventDefault()}/>
    <input type="text" placeholder='Search...' className='w-full outline-none text-[16px] md:text-[20px]' onChange = {(e)=>setInput(e.target.value)} value = {input}/>
   </form>

   <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick = {()=>setShowCart(true)}>
    <span className='absolute top-0 right-2 text-red-500 font-bold text-[18px]'>{count}</span>
   <LuShoppingBag className='w-[30px] h-[30px] text-green-400' />
   </div>

    </div>
  );
}

export default Nav;
