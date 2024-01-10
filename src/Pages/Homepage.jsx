import React from 'react';
import ProfilePage from "../Components/Home/ProfilePage.jsx";
import Balance from '../Components/Home/Balance.jsx';
import Transactions from '../Components/Home/Transactions.jsx';

const Homepage = () => {
  return (
    <>
    <ProfilePage/>
    <Balance/>
    <Transactions/>
    </>
  )
}

export default Homepage
