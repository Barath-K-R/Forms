import React from 'react'
import DraggableField from './DraggableField'

const Fields = () => {
  return (
    <div className='flex flex-col items-center h-screen w-40 bg-yellow-300 pt-8 '>
       <DraggableField label={'name'}/>
       <DraggableField label={'address'}/>
       <DraggableField label={'number'}/>
       <DraggableField label={'date'}/>
    </div>
  )
}

export default Fields