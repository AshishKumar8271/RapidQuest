import React from 'react'

const Balance = () => {
    return (
        <article className='bg-gray-100 p-6 rounded-2xl shadow-xl tracking-tighter'>
            <div>
                <h4 className='font-semibold text-xl'>Today</h4>
                <h1 className='font-bold my-1 text-4xl'>$19,892</h1>
                <p className=' text-gray-500 mt-2 text-sm'>Account Balance</p>
            </div>

            <div className='mt-6 flex justify-between sm:justify-around'>
                <div>
                    <h4 className='font-bold text-xl '>$4,000</h4>
                    <p className='text-gray-500 text-sm'>Year-to-Date Contribution</p>
                </div>
                <div>
                    <h4 className='font-bold text-xl '>$1,892</h4>
                    <p className='text-gray-500 text-sm'>Total Interest</p>
                </div>
            </div>

            <button className="mt-6 bg-indigo-700 w-full text-white p-3 rounded-lg">
                I want to...
            </button>
        </article>



    )
}

export default Balance
