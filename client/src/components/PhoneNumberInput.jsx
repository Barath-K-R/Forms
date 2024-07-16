import React from 'react'

const NumberInput = () => {
  return (
    <div className='flex flex-col p-4 w-6/12 border border-gray-200'>
      <label htmlFor="numberinput">Number</label>
      <input className='border border-gray-200' type="text" />
    </div>
  )
}

export default NumberInput