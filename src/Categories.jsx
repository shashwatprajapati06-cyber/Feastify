import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";


export const Categories = [
    {
        id:1,
        name:'All',
        icon:<TiThSmallOutline className ='w-[70px] h-[70px] text-green-500' />
    },
     {
        id:2,
        name:'breakfast',
        icon:<MdOutlineFreeBreakfast className ='w-[70px] h-[70px] text-green-500' />
    },
     {
        id:3,
        name:'soups',
        icon:<LuSoup className ='w-[70px] h-[70px] text-green-500' />

    },
     {
        id:4,
        name:'pasta',
        icon:<CiBowlNoodles className ='w-[70px] h-[70px] text-green-500' />

    },
     {
        id:5,
        name:'main_course',
        icon:<MdOutlineFoodBank className ='w-[70px] h-[70px] text-green-500' />
    },
     {
        id:6,
        name:'pizza',
        icon:<GiFullPizza className ='w-[70px] h-[70px] text-green-500' />

    },
     {
        id:7,
        name:'burger',
        icon:<GiHamburger className ='w-[70px] h-[70px] text-green-500' />

    }
]