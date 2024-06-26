'use client'
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full shadow-md flex flex-col  border-t-2 border-amber-600 sm:border-none sm:pt-16 pb-20 bg-white px-7 sm:gap-20">
        <div className="flex  gap-16  items-center justify-center">
        <div className="sm:flex hidden">
          <ul className=" flex-col">
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
        </div>
            <div className="flex flex-col pt-10 sm:max-w-5xl">
                <p  style={{ color:"#FEB101", fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}} className="py-8">
                Welcome, fellow code wizard!
                </p>
                {/* <h1 className="text-4xl sm:text-5xl font-extrabold ">
                Unleashing bytes of creativity  <span style={{ color: '#FEB103' }}>and</span> 
                <br className="max-md:hidden" />
                crafting digital magic


                </h1> */}
                


                <TypeAnimation
                    sequence={[
                        
                        'Where we turn caffeine into code and dreams into web apps!',
                        6000
                    ]}
                    className='text-4xl  sm:text-5xl font-extrabold'
                    wrapper='h1'

                    speed={5}
                    deletionSpeed={5}
                    style={{ display: 'inline-block' }}
                    repeat={false}
                />
            
                {/* <p  style={{ color:"#CACACA", fontSize:"15px", fontStyle:"italic", fontWeight:"bold"}} className="pt-8">
                    Promptopia is an open-source AI prompting tools for modern world to discover
                </p> */}
                <p  style={{ color:"#CACACA", fontSize:"15px", fontStyle:"italic", fontWeight:"bold"}} className="pt-8">
                Unleashing bytes of creativity and crafting digital magic.
                </p>
                <p className="" style={{fontSize:"15px", fontWeight:"bold"}}>
                    #create and share creative prompts
                </p>

            <div className="flex pt-10">
            <Link href="#about">
                <button className=" w-12 h-12 rounded-full bg-yellow-500 shadow-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 11a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 11z"/>
                    </svg>
                    
                    
                </button>
                </Link>
            </div>

            </div>
        
        </div>

        <div className="flex justify-end relative  pt-14 sm:px-10 ">
            <div className="flex flex-col items-end gap-4 absolute bottom-0">
               
                <FaGithub  size={20} color='#1f1f1f'/>
                <FaLinkedin size={20} color='#1f1f1f'/>
                <FaTwitter size={20} color='#1f1f1f'/>
            </div>

        </div>

    </section>
  )
}

export default Hero