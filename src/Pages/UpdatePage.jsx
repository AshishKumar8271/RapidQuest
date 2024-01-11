import React from 'react';
import Close from '../Components/UpdatePage/Close';
import ComparePeers from "../Components/UpdatePage/ComparePeers.jsx";
import ComparisonStatus from '../Components/UpdatePage/ComparisonStatus';
import Retire from '../Components/UpdatePage/Retire';
import { useSelector } from 'react-redux';
import UpdateBtn from '../Components/UpdatePage/UpdateBtn';

const UpdatePage = () => {
  const { sidepage } = useSelector((state) => state.update);
  console.log(sidepage);
  return (
    <aside className={`${sidepage ? "translate-x-0" : "translate-x-full"} fixed w-screen h-screen bg-white top-0 left-0 overflow-y-scroll overflow-x-hidden z-30 transition-all duration-300`}>
      <div className='pt-16 px-6'>
      <Close />
      <ComparePeers />
      <ComparisonStatus />
      <Retire />
      </div>
      <UpdateBtn/>
    </aside>
  )
}

export default UpdatePage
