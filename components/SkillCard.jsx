import React from 'react'

const SkillCard = ({skill, description}) => {
  
  return (
    <div className='flex-col px-8 py-4 bg-gray-100 justify-start border border-transparent  hover:border-red-500- hover:bg-transparent '>
          <h3 className='font-bold text-lg flex justify-start'>{skill}</h3>
          <ul className='flex justify-start flex-wrap gap-2  text-sm pt-4 text-[#414a4c]'>
            {description.map((desc, descIndex) => (
              <li className=' px-3 py-1  border-solid border-2 rounded-lg' key={descIndex}>{desc}</li>
            ))}
          </ul>
    </div>
  )
}

export default SkillCard

