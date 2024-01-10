import React from 'react';
import Close from '../Components/UpdatePage/Close';
import ComparePeers from "../Components/UpdatePage/ComparePeers.jsx";
import ComparisonStatus from '../Components/UpdatePage/ComparisonStatus';
import Retire from '../Components/UpdatePage/Retire';
import { useSelector } from 'react-redux';

const UpdatePage = () => {
  const { sidepage } = useSelector((state) => state.update);
  console.log(sidepage);
  return (
    <aside className={`${sidepage ? "translate-x-0" : "translate-x-full"} fixed py-20 px-6 w-full h-full bg-white top-0 left-0 z-20 transition-all duration-300`}>
      <Close />
      <ComparePeers />
      <ComparisonStatus />
      <Retire />
    </aside>
  )
}

export default UpdatePage
