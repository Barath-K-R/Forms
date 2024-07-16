import React from 'react'

const DateInput = () => {
  return (
    <div className='flex flex-col p-4 w-6/12 border border-gray-200'>
      <label htmlFor="dateinput">Date</label>
      <input className='border border-gray-200' type="date" />
    </div>
  )
}

export default DateInput