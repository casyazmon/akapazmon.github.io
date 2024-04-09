import Image from 'next/image'
import Nav from './Nav'
import SkillCard from './SkillCard'
import Subnav from './Subnav'

const skills = () => {

  const data = [
    { skill: 'Android developer', description: 'Java, Kotlin' },
    { skill: 'UX designer', description: 'Figma, Photoshop' },
    { skill: 'iOS developer', description: 'Swift' },
    { skill: 'Android developer', description: 'Java, Kotlin' },
    { skill: 'UX designer', description: 'Figma, Photoshop' },
    { skill: 'iOS developer', description: 'Swift' },
    { skill: 'UX designer', description: 'Figma, Photoshop' },
    { skill: 'iOS developer', description: 'Swift' }
  ];

  return (
    <section style={{backgroundColor:"#FEB101"}} className=" w-full flex flex-col  mt-24 sm:mt-44 shadow-lg  p-5">
      <div className="flex-col flex bg-white  pt-5">
        <Subnav/>

        <div className="flex flex-col justify-center items-center pt-20">
            <h1 className="head_text  text-center">
              Open to work (skills)
            </h1>
            <h3 className=' w-full py-3 text-center'>
                I will like <span style={{ color: '#FEB103' }}>YOU</span> to hire me.
            </h3>
        </div>


  {/* <Image
      src="/assets/icons/side-menu.png"
      width={50}
      height={50}
      className='max-w-full max-h-full object-contain'
      alt='profile'
  /> */}
          
    
        <div className="flex  gap-10 px-10 text-center   justify-center py-10 mb-20  ">

          <div className="hidden sm:flex">
            <Image
                src="/assets/icons/side-menu.png"
                width={50}
                height={50}
                className='max-w-full max-h-full object-contain'
                alt='profile'
            />
            </div>
          
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-full justify-center  ">
              {data.map((skills, index) => (
                <SkillCard key={index} skill={skills.skill} description={skills.description}/>
              ))}
          </div>
          
        </div>

            
          
      </div>

    </section>
  )
}

export default skills