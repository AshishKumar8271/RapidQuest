import React from 'react'

const Retirement = () => {
    return (
        <section className='mt-16'>
            <div>
                <h6 className='font-semibold text-indigo-600'>Retirement Income</h6>
                <h2 className='font-semibold text-2xl'>Starting Year 2056</h2>
            </div>

            <form className='mt-6'>
                <h1 className='font-bold text-3xl'>$300,000</h1>
                <label htmlFor="goal"></label>
                <input type="text" name='goal' id='goal' placeholder='My Goal' className='shadow-input w-full py-3 outline-none text-gray-600' />

                <div className='mt-6 flex justify-between'>
                    <div>
                        <h2 className='font-bold text-2xl'>59%</h2>
                        <label htmlFor="progress"></label>
                        <input type="text" name='progress' id='progress' placeholder='Goal Achieved' className='shadow-input w-full py-3 outline-none text-gray-600' />
                    </div>

                    <div>
                        <h2 className='font-bold text-2xl'>K 300</h2>
                        <label htmlFor="progress"></label>
                        <input type="text" name='progress' id='progress' placeholder='Est. Monthly Income' className='shadow-input w-full py-3 outline-none text-gray-600' />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Retirement;
