import React from 'react'
import Navbar from './Components/Navbar';
import NotificationBell from './Components/NotificationBell';
import Homepage from './Pages/Homepage.jsx';
import GraphPage from "./Pages/GraphPage.jsx";
import UpdatePage from "./Pages/UpdatePage.jsx";

const App = () => {
  return (
    <>
    
      <div className='h-full w-full bg-white rounded-3xl shadow-xl'>
        <Navbar />
        <NotificationBell />
        <UpdatePage/>
        <div className='p-6 pb-24'>
          <Homepage/>
          <GraphPage/>
        </div>
      </div>
    </>
  )
}

export default App;
