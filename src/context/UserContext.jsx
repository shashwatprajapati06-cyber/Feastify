import React, { createContext ,useState} from 'react';
export const dataContext = createContext()
import { food_items } from '../food';

const UserContext = ({children}) => {
    let [input,setInput] = useState("")
    let [cate,setCate] = useState(food_items);
    let [showcart,setShowCart] = useState(false);
    let [count,setCount] = useState(0);

    let [cart,setCart] = useState([]);
    let data = {
input,setInput,cate,setCate,showcart, setShowCart, cart, setCart,count,setCount
}

  return (
    <div>
        <dataContext.Provider value ={data}>
       {children}
        </dataContext.Provider>
    </div>
  );
}

export default UserContext;
