import React from 'react';
import { TransDetails } from "../../assets/TransDetails.jsx";

const Transactions = () => {
    return (
        <article className='mt-10 bg-gray-100 g-gray-100 p-6 rounded-2xl shadow-xl tracking-tighter'>
            <h3 className='font-semibold text-xl text-gray-800'>Recent Transactions</h3>
            {
                TransDetails.map((ele) => {
                    const { id, date, bank } = ele;
                    return (
                        <div className='p-3 shadow-md max-w-96' key={id}>
                            <p className='text-sm text-gray-500'>{date}</p>
                            <h6 className='font-semibold tracking-normal font-sans text-gray-900'>Withdrawal Transfer to Bank-{bank}</h6>
                        </div>
                    )
                })
            }
        </article>

    )
}

export default Transactions
