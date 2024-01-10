import React from 'react';

const ProfilePage = () => {
  return (
    <section>
      <div className='mb-10 flex items-center'>
        <div>
          <img src="./ProfilePic1.jpg" alt="" className='h-20 w-20 object-cover rounded-full' />
        </div>
        <div className='ml-4'>
          <h1 className='font-semibold text-2xl font-serif'>Hi Mike,</h1>
          <p className='text-gray-600'>welcome back.</p>
        </div>
      </div>
    </section>

  )
}

export default ProfilePage;
