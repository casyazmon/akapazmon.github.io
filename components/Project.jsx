import Image from 'next/image'
import Subnav from './Subnav';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';

const Project = () => {

    const data = [
        { 
            image: '/assets/images/project3.jpg',
            name: 'BargainFinder (Online Store)', 
            description: 'BargainFinder is a mobile application designed to help users find the best deals on various products available online. By crawling the web and aggregating data from multiple e-commerce platforms... ',
            github:'https://github.com/casyazmon',
            link:'website',
            stack: [
                'Java', 'Springboot', 'React', 'Next.js', 'tailwind'
            ]
        },
        { 
            image: '/assets/images/project2.jpg',
            name: 'Online Quiz App (Wizz)', 
            description: 'The application allows users to take quizzes on various topics. Users can browse available quizzes, answer questions, and receive feedback on their results.',
            github:'https://github.com/casyazmon',
            link:'website',
            stack: [
                'Java', 'Springboot', 'React', 'Next.js', 'tailwind'
            ]
        },
        { 
            image: '/assets/images/project3.jpg',
            name: 'Make it Short (URL)', 
            description: 'MakeItShort is a simple URL shortener API built with Java Spring Boot and MongoDB. It allows users to shorten long URLs into concise and easily shareable links. Provide user registration and login...',
            github:'https://github.com/casyazmon/MakeItShort-URL-Shortener',
            link:'website',
            stack: [
                'Java', 'Springboot', 'React', 'Next.js', 'tailwind'
            ]
        },
        
      ];


  return (
    <section id='projects'  className=" bg-[#FEB101] w-full flex flex-col mt-24 sm:mt-44 shadow-lg   p-5">
    <div className="flex-col flex bg-white  pt-5 pb-24">
        <Subnav/>

        <div className=" flex-col justify-center items-center pt-20">
            <h1 className="head_text text-center ">
                Some relevant <span style={{ color: '#FEB103' }}>projects</span>. 
            </h1>
            <h3 className=' w-full py-3 text-center desc-sub'>
                github.com/casyazmon
            </h3>
        </div>
      
            
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 pt-10 sm:px-20">
        {data.map((project, index) => (
            <ProjectCard
                key={index}
                image={project.image}
                name={project.name}
                description={project.description}
                github={project.github}
                link={project.link}
                stack={project.stack ? project.stack : []}
            />
        ))}

        </div>

            

            
          
       
        
      
    </div>

  </section>
  )
}

export default Project