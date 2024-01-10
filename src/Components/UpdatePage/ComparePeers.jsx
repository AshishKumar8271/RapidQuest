import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const ComparePeers = () => {
    return (
        <div className=''>
            <h2 className='text-lg font-semibold text-gray-900'>How do I compare to my peers?</h2>
            <p className='text-[13px] text-neutral-400'>These numbers represents current goal achievement.</p>

            <div className='mt-8'>
            <form>
                <div className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor="age" className='min-w-20 font-semibold text-md'>Age:</label>
                        <div className='relative text-gray-500'>
                            <IoMdArrowDropdown className='absolute h-full right-1 top-1/2 text-2xl -translate-y-1/2 pointer-events-none' />
                            <select name="age" id="age" className=' appearance-none pr-7 outline-none bg-none text-sm'>
                                <option value="Under_30">Under 30</option>
                                <option value="Under_40">Under 40</option>
                                <option value="Under_50">Under 50</option>
                                <option value="Under_60">Under 60</option>
                            </select>
                        </div>
                    </div>
                    <hr className='border-[1px] border-gray-300 w-full mt-3'></hr>
                </div>

                <div className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor="salary" className='min-w-20 font-semibold text-md'>Salary:</label>
                        <div className='relative text-gray-500'>
                            <IoMdArrowDropdown className='absolute h-full right-1 top-1/2 text-2xl -translate-y-1/2 pointer-events-none' />
                            <select name="salary" id="salary" className=' appearance-none pr-7 outline-none bg-none text-sm'>
                                <option value="k20-30">K 20 - 30</option>
                                <option value="k30-40">K 30 - 40</option>
                                <option value="k40-50">k 40 - 50</option>
                                <option value="k50-60">k 50 - 60</option>
                            </select>
                        </div>
                    </div>
                    <hr className='border-[1px] border-gray-300 w-full mt-3'></hr>
                </div>

                <div className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor="gender" className='min-w-20 font-semibold text-md'>Gender:</label>
                        <div className='relative text-gray-500'>
                            <IoMdArrowDropdown className='absolute h-full right-1 top-1/2 text-2xl -translate-y-1/2 pointer-events-none' />
                            <select name="gender" id="gender" className='appearance-none pr-7 outline-none bg-none text-sm'>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <hr className='border-[1px] border-gray-300 w-full mt-3'></hr>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ComparePeers
