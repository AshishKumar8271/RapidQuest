import React, { useEffect, useRef, useState } from 'react'

const Retire = () => {
  const rangeBG = useRef();
  const RetireBG = useRef();
  const [contributionValue, setContributionValue] = useState(12);
  const [retireAge, setRetireAge] = useState(65);



  const rangeColor = () => {
    const a = rangeBG.current.value;
    const b = RetireBG.current.value;
    const maxOfRange = rangeBG.current.max;
    const minOfrange = rangeBG.current.min;
    const maxOfRetire = RetireBG.current.max;
    const minOfRetire = RetireBG.current.min;
    const rangePercentage = ((a-minOfrange) / (maxOfRange-minOfrange)) * 100;
    const RetirePercentage = ((b - minOfRetire) / (maxOfRetire- minOfRetire)) * 100;
    setContributionValue(a);
    setRetireAge(b);
    rangeBG.current.style.background = `linear-gradient(to right,rgb(0, 179, 250),rgb(0, 179, 250) ${rangePercentage}%,#d6d6d6 ${rangePercentage}%)`;
    RetireBG.current.style.background = `linear-gradient(to right,rgb(0, 179, 250),rgb(0, 179, 250) ${RetirePercentage}%,#d6d6d6 ${RetirePercentage}%)`;
  }

  

  useEffect(() => {
    rangeColor();
  })


  return (
    <div className='bg-gray-100 rounded-3xl mt-6 py-4 px-2 shadow-xl'>
      <h2 className='font-semibold text-lg'>Retirement Strategy</h2>
      <form>
        <div className='flex flex-col mt-3'>
          <label htmlFor="contribution" className='text-gray-900'>Employee Contribution</label>
          <div className='flex items-center justify-between'>
            <input type="range" className="range-slider" min="0" max="20" step={0.01} value={contributionValue} id="contribution" name='contribution' onChange={() => {
              rangeColor();
            }

            } ref={rangeBG} />
            <div className='ml-2 flex items-center bg-white rounded-lg text-sm'>
              <p className=' px-2 border-r-[1px]'>{Math.floor(contributionValue)}</p>
              <span className='p-1'>%</span>
            </div>
          </div>
        </div>


        <div className='flex flex-col mt-3'>
          <label htmlFor="Retire_Age" className='text-gray-900'>Retirement Age</label>
          <div className='flex items-center justify-between'>
            <input type="range" className="range-slider" min="25" max="70" step={0.01} value={retireAge} id="Retire_Age" name='Retire_Age' onChange={()=>rangeColor()} ref={RetireBG} />
            <p className='ml-2 text-sm px-2 border-r-[1px] bg-white'>{Math.floor(retireAge)}</p>
          </div>
        </div>
      </form>
          
      <div className='mt-6 flex items-center'>
      <h6 className='text-gray-900 w-full '>Employer Contribution</h6>
      <span className='px-2 border-r-[1px] bg-white text-sm'>8.4%</span>
      </div>

      <div className='mt-6 flex items-center'>
      <h6 className='text-gray-900 w-full '>Interest Rate</h6>
      <span className='px-2 border-r-[1px] bg-white text-sm'>5%</span>
      </div>

    </div>
  )
}

export default Retire
