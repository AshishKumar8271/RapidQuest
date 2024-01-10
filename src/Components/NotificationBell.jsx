import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoDotFill } from "react-icons/go";

const NotificationBell = () => {
  return (
    <header className="sticky z-10 top-0 p-4 bg-inherit text-2xl text-gray-600 flex justify-end">
        <button className='relative cursor-pointer p-1.5'><IoMdNotificationsOutline />
        <span className='text-sm absolute text-sky-600 -right-0.5 top-1'><GoDotFill /></span>
        </button>
      </header>
  )
}

export default NotificationBell
