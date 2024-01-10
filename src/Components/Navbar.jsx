import React, { useState } from 'react';
import NavAssets from "../assets/NavAssets";

const Navbar = () => {
    const[values,setValues] = useState(0);
  return (
    <nav className='fixed z-10 bottom-0 left-0 flex justify-around w-full bg-white py-2'>
        {
            NavAssets.map((ele,index)=> {
                const {id,logo} = ele;
                return(
                    <button className={`text-gray-500 text-xl p-3 hover:bg-indigo-700 hover:text-white rounded-lg transition-all duration-300 ease-out ${index=== values && "bg-indigo-700 text-white"}`} key={id}
                    onClick={()=>setValues(index)}
                    >
                    {logo}
                    </button>
                )
            })
        }
    </nav>
  )
}

export default Navbar;
