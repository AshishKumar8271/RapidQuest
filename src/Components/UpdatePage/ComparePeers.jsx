import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const ComparePeers = () => {
    return (
        <div className=''>
            <h2 className='text-xl font-semibold text-gray-900'>How do I compare to my peers?</h2>
            <p className='text-sm font-semibold text-neutral-400'>These numbers represents current goal achievement.</p>

            <div className='mt-8'>
            <form>
                <div className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor="age" className='min-w-20 font-semibold text-lg'>Age:</label>
                        <div className='relative text-slate-600'>
                            <IoMdArrowDropdown className='absolute h-full right-1 top-1/2 text-2xl -translate-y-1/2 pt-1 pointer-events-none' />
                            <select name="age" id="age" className='font-semibold appearance-none p-1 pr-7 outline-none'>
                                <option value="Under_30">Under 30</option>
                                <option value="Under_40">Under 40</option>
                                <option value="Under_50">Under 50</option>
                                <option value="Under_60">Under 60</option>
                            </select>
                        </div>
                    </div>
                    <hr className='border-[1px] border-gray-300 w-full mt-4'></hr>
                </div>

                <div className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor="salary" className='min-w-20 font-semibold text-lg'>Salary:</label>
                        <div className='relative text-slate-600'>
                            <IoMdArrowDropdown className='absolute h-full right-1 top-1/2 text-2xl -translate-y-1/2 pt-1 pointer-events-none' />
                            <select name="salary" id="salary" className='font-semibold appearance-none p-1 pr-7 outline-none'>
                                <option value="k20-30">K 20 - 30</option>
                                <option value="k30-40">K 30 - 40</option>
                                <option value="k40-50">k 40 - 50</option>
                                <option value="k50-60">k 50 - 60</option>
                            </select>
                        </div>
                    </div>
                    <hr className='border-[1px] border-gray-300 w-full mt-4'></hr>
                </div>

                <div className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor="gender" className='min-w-20 font-semibold text-lg'>Gender:</label>
                        <div className='relative text-slate-600'>
                            <IoMdArrowDropdown className='absolute h-full right-1 top-1/2 text-2xl -translate-y-1/2 pt-1 pointer-events-none' />
                            <select name="gender" id="gender" className='font-semibold appearance-none p-1 pr-7 outline-none'>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <hr className='border-[1px] border-gray-300 w-full mt-4'></hr>
                </div>
            </form>
            </div>
        </div>
    )
}

export default ComparePeers
