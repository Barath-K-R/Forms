import React from 'react'

const NameInput = () => {
  return (
    <div className='flex flex-col p-4 w-8/12 border border-gray-200'>
         <label htmlFor="name">Name</label>
         <section className='flex gap-4'>
            <input className='border border-gray-200' type="text" placeholder='First Name'/>
            <input className='border border-gray-200' type="text" placeholder='Last Name' />
         </section>
    </div>
  )
}

export default NameInput