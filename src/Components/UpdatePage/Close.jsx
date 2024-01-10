import React from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { CloseSidepage } from '../../UpdateSlice/UpdateSlice.jsx';

const Close = () => {
  const dispatch = useDispatch();
  return (
    <div className='fixed w-full top-0 left-0 flex justify-end text-3xl text-gray-500 p-1 bg-white'>
      <button className='p-3 hover:rotate-180 transition-all duration-700' onClick={()=>dispatch(CloseSidepage())}><IoClose /></button>
    </div>
  )
}

export default Close
