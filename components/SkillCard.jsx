import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='flex-auto px-8 py-4 bg-gray-100 items-start border border-transparent 
    hover:border-red-500- hover:bg-transparent '>
        <h3 className='font-bold text-sm'>{props.skill}</h3>
        <p className='text-gray-400 text-sm'>{props.description}</p>
        
    </div>
  )
}

export default SkillCard