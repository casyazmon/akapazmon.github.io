'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

const About = ({children, id}) => {
  const [activeSection, setActiveSection] = useState(null);

  

  return (
    <section id='about' className=" w-full  flex flex-col-reverse  sm:flex-row   sm:mt-36 shadow-md ">
        
      <div className=" flex justify-center items-center flex-1 py-16 px-7 gap-20 bg-white">
        

        

        <div className="sm:flex hidden">
          <ul className=" flex-col">
            
            <li className="w-5 border-t-2 border-gray-400 my-4">
              <Link href='#' id='about'></Link>
            </li>
            <li className="w-10 border-t-4 border-amber-400 my-4">
            </li>
            <li className="w-5 border-t-2 border-gray-400 my-4">
              <Link href='#' id='about'></Link>
            </li>
            <li className="w-5 border-t-2 border-gray-400 my-4">
              <Link href='#' id='about'></Link>
            </li>

          </ul>
        </div>
        

        <div className="flex flex-col sm:pr-20">
          <h1 className=" text-3xl font-bold ">
          About Me | <span className='text-outline'>My Story</span>. 
              
          </h1>
         
          <p className="desc-sub leading-relaxed pt-10 ">
          My passion for technology and computers began at the age of 12. Since then, I've been interested in software development. I enrolled at a university, where I obtained a B.Tech in Computer Engineering in 2017.
          After graduating, I spent two years developing software for a tech startup and contributing to open-source projects. I then pursued a postgraduate degree in Computer Science and General Pedagogy.
          Immediately following my graduation in 2021, I secured a teaching position at a government high school, where I taught computer science from 2021 to 2024. It was an amazing and memorable experience.
          After several years of teaching, I'm ready to return to software engineering, focusing on mobile and cloud development. I'm open-minded and eager to contribute by writing clean code. 🚀
          </p>

          {/* <div className="flex-col pt-4">
          <p className=" text-outline text-xl font-extrabold">
              Education
          </p>
          <p className="text-lg font-semibold text-red-500">
              Ecole Normale Superieur (University of Bamenda)
          </p>
          <p className=" leading-relaxed">
              Postgraduate | Computer Science 
          </p>
          </div> */}

        </div>
        
      </div>

      <div className="flex-item flex-1 flexItem">
      <div className="flex gap-4 flex-end">
            <button
            type='button'
            className='shadow-sm bg-white text-amber-500 text-sm rounded-full px-4 py-2 m-4 font-semibold'>
                <Link href="/register">
                Download resume
                </Link>
                
            </button>

        </div>
        
       <div className="flex p-6 sm:p-10">
       <img src="/assets/images/kasina.png" alt="Your Image" className="max-w-full max-h-full rounded-full" />
       </div>
        {/* <Image
            src="/assets/images/plate.jpg"
            width={150}
            height={150}
            className='max-w-full max-h-full object-contain'
            alt='profile'
        
        /> */}
        
      </div>
    </section>
  )
}

export default About