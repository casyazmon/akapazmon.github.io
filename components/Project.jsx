import Image from 'next/image'
import Subnav from './Subnav';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';

const Project = () => {

    const data = [
        { 
            image: '/assets/images/project2.jpg',
            name: 'Online Quiz App (Wizz)', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus officia temporibus non, voluptatem voluptates.',
            github:'github',
            link:'website'
        },
        { 
            image: '/assets/images/project3.jpg',
            name: 'Make it Short (URL)', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus officia temporibus non, voluptatem voluptates.',
            github:'github',
            link:'website'
        },
        { 
            image: '/assets/images/project2.jpg',
            name: 'Market in One (Online Store)', 
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus officia temporibus non, voluptatem voluptates.',
            github:'github',
            link:'website'
        }
      ];


  return (
    <section style={{backgroundColor:"#FEB101"}} className=" w-full flex flex-col mt-24 sm:mt-44 shadow-lg   p-5">
    <div className="flex-col flex bg-white  pt-5 pb-24">
        <Subnav/>

        <div className="flex flex-col justify-center items-center pt-20">
            <h1 className="head_text ">
                Some relevant <span style={{ color: '#FEB103' }}>projects</span>. 
            </h1>
            <h3 className=' w-full py-3 text-center desc-sub'>
                github.com/casyazmon
            </h3>
        </div>
      
            
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 pt-10 sm:px-20">
            {data.map((project, index) => (
                <ProjectCard key={index} image={project.image} 
                name={project.name} description={project.description}
                 github={project.github}
                 
                 link={project.link}/>
            ))}
        </div>

            

            
          
       
        
      
    </div>

  </section>
  )
}

export default Project