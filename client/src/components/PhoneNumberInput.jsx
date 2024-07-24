import React from 'react'

const NumberInput = ({handleChange}) => {
  return (
    <div className='flex flex-col p-4 w-6/12 border border-gray-200'>
      <label htmlFor="numberinput">Number</label>
      <input className='border border-gray-200' type="text" name='phonenumber' onChange={handleChange}/>
    </div>
  )
}

export default NumberInput