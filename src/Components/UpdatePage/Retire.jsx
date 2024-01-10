import React from 'react'

const Retire = () => {
  return (
    <div>
      <h2 className='font-semibold text-xl'>Retirement Strategy</h2>
      <form>
        <label htmlFor="contribution">Employee Contribution</label>
        <input type="range" name='contribution' id='contribution' min="0" max="100" className='h-1 accent-sky-400 appearance-none '/>
      </form>
    </div>
  )
}

export default Retire
