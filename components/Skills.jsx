import Image from 'next/image'
import Nav from './Nav'
import SkillCard from './SkillCard'
import Subnav from './Subnav'
import Link from 'next/link'

const skills = () => {

  const skills = [
    { name: 'Programming Languages', description: ['Java', 'JavaScript', 'PHP', 'HTML', 'Sass', 'GraphQL']},
    { name: 'Libraries & Frameworks', description: ['Springboot', 'React', 'Next.js', 'Gatsby', 'Node.js', 'React Native' ]},
    { name: 'Tools and Platforms', description: ['AWS','Heroku', 'WordPress', 'Firebase', 'Docker', 'Webpack' ]}
  ]



  return (
    <section id='skills' style={{backgroundColor:"#FEB101"}} className=" hidden  w-full sm:flex flex-col  mt-24 sm:mt-44 shadow-lg  p-5">
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
          <div className="sm:flex hidden">
          <ul className=" flex-col">
            
            <li className="w-5 border-t-2 border-gray-400 my-4">
              <Link href='#' id='about'></Link>
            </li>
            
            <li className="w-5 border-t-2 border-gray-400 my-4">
              <Link href='#' id='about'></Link>
            </li>
            <li className="w-10 border-t-4 border-amber-400 my-4">
            </li>
            <li className="w-5 border-t-2 border-gray-400 my-4">
              <Link href='#' id='about'></Link>
            </li>

          </ul>
        </div>
            </div>
          
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-full justify-center  ">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill.name} description={skill.description}/>
              ))}
          </div>
          
        </div>

            
          
      </div>

    </section>
  )
}

export default skills