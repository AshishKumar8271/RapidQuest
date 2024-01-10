import React, { useState } from 'react';
import BarChart from './BarChart.jsx';
import {ChartData} from "../../assets/ChartData.jsx";
import { useDispatch } from 'react-redux';
import { ShowSidepage } from '../../UpdateSlice/UpdateSlice.jsx';

const Chart = () => {

    const dispatch = useDispatch();


    const [contribution,setContribution] = useState({
        labels: ChartData.map((ele)=>ele.age),
        datasets:[
            {
                labels:'',
                data: ChartData.map((ele)=> ele.employer),
                backgroundColor:"#1e3a8a",
                barThickness: 16,
                color : '#666',
            },
            {
                labels:'',
                data: ChartData.map((ele)=> ele.employee),
                backgroundColor:"#2563eb",
                barThickness: 16,
                color : '#666',

            },
            {
                labels:'',
                data: ChartData.map((ele)=> ele.Interest),
                backgroundColor:"#3b82f6",
                barThickness: 16,
                color : '#666',


            },

        ] ,
    })


  return (
    <section className='mt-16'>
        <h4 className='font-semibold text-lg'>Contributions Overtime</h4>

        <div className='mt-3 flex justify-between'>
            <div>
                <p><span className='h-1.5 w-3 rounded-3xl bg-blue-900 inline-block'></span></p>
                <p className='text-[13px] text-gray-500'>Employer</p>
                <p className='font-bold text-md'>$73,500</p>
            </div>
            <div>
                <p><span className='h-1.5 w-3 rounded-3xl bg-blue-600 inline-block'></span></p>
                <p className='text-[13px] text-gray-500'>Employee</p>
                <p className='font-bold text-md'>$52,500</p>
            </div>
            <div>
                <p><span className='h-1.5 w-3 rounded-3xl bg-blue-500 inline-block'></span></p>
                <p className='text-[13px] text-gray-500'>Total Interest</p>
                <p className='font-semibold text-md'>$244,313</p>
            </div>
        </div>

        <button className='block w-full relative mt-10 ' onClick={()=>dispatch(ShowSidepage())}>
        <BarChart BarData={contribution}/>
        </button>
    </section>
  )
}

export default Chart
