'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

const About = ({children, id}) => {
  const [activeSection, setActiveSection] = useState(null);

  

  return (
    <section id='about' className=" w-full  flex flex-col-reverse  sm:flex-row mt-14  sm:pt-36 shadow-md ">
        
      <div className=" flex justify-center items-center flex-1 py-16 px-7 gap-20 bg-white">
        {/* <ul className="fixed right-0 top-1/2 transform -translate-y-1/2">
          <li className='h-10 w-1 border-r  bg-blue-500 border-blue-700'>
            <Link href="/about">About</Link>
          </li>
          <li className='h-10 w-16 border-r  bg-blue-500 border-blue-700'>
            <Link href="/projects">Projects</Link>
          </li>
        </ul> */}

        <ul className="sm:flex-col hidden">
          <li className="w-10 border-t-4 border-amber-400 my-4">
          </li>
          <li className="w-5 border-t-2 border-gray-400 my-4">
            <Link href='#' id='about'></Link>
          </li>
          <li className="w-5 border-t-2 border-gray-400 my-4">
            <Link href='#' id='about'></Link>
          </li>
          <li className="w-5 border-t-2 border-gray-400 my-4">
            <Link href='#' id='about'></Link>
          </li>

        </ul>
        

        <div className="flex flex-col sm:pr-20">
          <h1 className=" text-3xl font-bold ">
          About Me | <span className='text-outline'>My Story</span>. 
              
          </h1>
         
          <p className="desc-sub leading-relaxed pt-10 ">
          Hey there! 👋 I'm a software developer with a passion for teaching and creating innovative solutions. After getting my 
          B.Tech in Computer Engineering, I spent two years in software development before pursuing a postgraduate degree in Computer
           Science and Pedagogy. Teaching computer science in high school from 2021 to 2024 was an amazing experience, but now I'm 
           excited to dive back into software development. I'm all about crafting elegant code and solving real-world problems. 
           Let's create something awesome together! Thanks for stopping by my portfolio! 🚀
          </p>

          <div className="flex-col pt-4">
          <p className=" text-outline text-xl font-extrabold">
              Education
          </p>
          <p className="text-lg font-semibold text-red-500">
              Ecole Normale Superieur (University of Bamenda)
          </p>
          <p className=" leading-relaxed">
              Postgraduate | Computer Science 
          </p>
          </div>

        </div>
        
      </div>

      <div className="flex-item flex-1 flexItem">
      <div className="flex gap-4 flex-end">
            <button
            type='button'
            className='shadow-sm bg-white text-[#FEB101] text-sm rounded-full px-4 py-2 m-8 font-semibold'>
                <Link href="/register">
                Download resume
                </Link>
                
            </button>

        </div>
        
       <div className="flex px-16">
       <img src="/assets/images/kasina.png" alt="Your Image" className="max-w-full max-h-full object-contain" />
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