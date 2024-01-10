import React from 'react'

const Retirement = () => {
    return (
        <section className='mt-16'>
            <div>
                <h6 className='font-semibold text-indigo-600'>Retirement Income</h6>
                <h2 className='font-semibold text-2xl'>Starting Year 2056</h2>
            </div>

            <div className='mt-6'>
                <h3 className='font-bold text-2xl'>$300,000</h3>
                <p className='font-sans pb-3 text-sm shadow-input font-semibold text-gray-400'>My Goal</p>

                <div className='mt-6 flex justify-between'>
                    <div className='min-w-32'>
                    <h1 className='font-bold text-2xl'>59%</h1>
                <p className='font-sans pb-3 w-full text-sm shadow-input font-semibold text-gray-400'>Goal Achieved</p>
                    </div>

                    <div>
                    <h1 className='font-bold text-2xl'>k 300</h1>
                <p className='font-sans pb-3 w-full text-sm shadow-input font-semibold text-gray-400'>Est. Monthly Income</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Retirement;
