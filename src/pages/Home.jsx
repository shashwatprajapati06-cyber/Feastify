import React, { useContext } from 'react';
import Nav from '../components/Nav';
import { Categories } from '../Categories';
import Card from '../components/Card';
import { food_items } from '../food.js';
import { dataContext } from '../context/UserContext';
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2.jsx';

function Home() {

  let {
    input,
    cate,
    setCate,
    showcart,
    setShowCart,
    cart
  } = useContext(dataContext);

  function filter(category) {

    if (category === "All") {
      setCate(food_items);

    } else {

      let newlist = food_items.filter(
        (item) => item.food_category === category
      );

      setCate(newlist);
    }
  }

  return (

    <div className='bg-slate-200 w-full h-screen overflow-hidden'>

      <Nav />

     
      <div className='w-full h-[calc(100vh-80px)] overflow-y-auto'>

        {!input ? (

          <>
        
            <div className='flex flex-wrap justify-center items-center gap-6 p-5'>

              {Categories.map((item) => {

                return (

                  <div
                    key={item.name}
                    className='w-[140px] h-[140px] bg-white flex flex-col gap-5 p-5 text-[20px] font-semibold justify-center items-center text-gray-500 rounded-md shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
                    onClick={() => filter(item.name)}
                  >

                    {item.icon}
                    {item.name}

                  </div>
                );
              })}
            </div>

          
            <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>

              {cate.map((item) => {

                return (

                  <Card
                    key={item.id}
                    name={item.food_name}
                    image={item.food_image}
                    id={item.id}
                    price={item.price}
                    type={item.food_type}
                  />
                );
              })}
            </div>
          </>

        ) : (

          <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>

            {cate.map((item) => {

              return (

                <Card
                  key={item.id}
                  name={item.food_name}
                  image={item.food_image}
                  id={item.id}
                  price={item.price}
                  type={item.food_type}
                />
              );
            })}
          </div>
        )}
      </div>

     
      <div
        className={`
          w-full
          md:w-[40vw]
          h-screen
          fixed
          top-0
          right-0
          bg-white
          shadow-xl
          p-6
          z-50
          transition-all
          duration-500
          ${showcart ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Header */}
        <header className='w-full flex justify-between items-center mb-5'>

          <span className='text-green-400 text-[18px] font-semibold'>
            Order Items
          </span>

          <RxCross2
            className='w-[30px] h-[30px] text-green-400 cursor-pointer hover:text-gray-500'
            onClick={() => setShowCart(false)}
          />

        </header>

        {/* Scrollable Cart Items */}
        <div className='h-[90%] overflow-y-auto flex flex-col gap-5 pr-2'>

          {cart.map((item) => {

            return (

              <Card2
                key={item.id}
                name={item.name}
                image={item.image}
                id={item.id}
                price={item.price}
                type={item.type}
               
              />
            );
          })}
        </div>

      </div>

    </div>
  );
}

export default Home;
