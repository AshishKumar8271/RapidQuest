import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ComparisonStatus = () => {
    return (
        <div className='flex justify-between items-center mt-6 max-w-[400px] mx-auto'>
            <div className='max-w-20'>
                <div className='relative flex items-center justify-center'>
                    <CircularProgressbar className='transition-all' value={78}
                        strokeWidth={9}
                        styles={buildStyles({
                            pathColor: '#42f5ad',
                            trailColor: '#abeddd',
                            strokeLinecap: 'butt'

                        })}
                    />
                    <p className='absolute font-bold text-2xl'>78<sup>%</sup></p>
                </div>
                <p className='text-center mt-1 text-sm '>Average</p>
            </div>

            <div className='max-w-20'>
                <div className='relative flex items-center justify-center'>
                    <CircularProgressbar value={95}
                        strokeWidth={9}
                        styles={buildStyles({
                            pathColor: '#42f5ad',
                            trailColor: '#abeddd',
                            strokeLinecap: 'butt'
                        })}
                    />
                    <p className='absolute font-bold text-2xl'>95<sup>%</sup></p>
                </div>
                <p className='text-center mt-1 text-sm '>Top</p>
            </div>


            <div className='max-w-20'>
                <div className='relative flex items-center justify-center'>
                    <CircularProgressbar className='transition-all' value={59}
                        strokeWidth={9}
                        styles={buildStyles({
                            pathColor: '#42f5ad',
                            trailColor: '#abeddd',
                            strokeLinecap: 'butt'
                        })}
                    />
                    <p className='absolute font-bold text-2xl'>59<sup>%</sup></p>
                </div>
                <p className='text-center mt-1 text-sm '>Me</p>
            </div>
        </div>
    )
}

export default ComparisonStatus;
