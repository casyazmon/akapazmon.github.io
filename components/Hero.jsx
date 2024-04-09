import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full shadow-md flex flex-col pt-16 pb-6 bg-white px-7  gap-20">
        <div className="flex  gap-16 ">
            <div className="sm:flex hidden align-middle">
                <Image
                    src="/assets/icons/side-menu.png"
                    width={70}
                    height={70}
                    className='max-w-full max-h-full object-contain'
                    alt='profile'
                
                />
            </div>
            <div className="flex flex-col pt-10">
                <p  style={{ color:"#CACACA", fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}} className="pt-8">
                    Promptopia is an open-source AI prompting tools 
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold ">
                A occurence / object / sight that is <span style={{ color: '#FEB103' }}>both</span> 
                <br className="max-md:hidden" />
                a phenomenon and an anomaly.
                    
                
                    
                </h1>
                <p  style={{ color:"#CACACA", fontSize:"15px", fontStyle:"italic", fontWeight:"bold"}} className="pt-8">
                    Promptopia is an open-source AI prompting tools for modern world to discover
                </p>
                <p className="" style={{fontSize:"15px", fontWeight:"bold"}}>
                    #create and share creative prompts
                </p>

            <div className="flex pt-10">
            <button className=" w-12 h-12 rounded-full bg-yellow-500 shadow-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 11a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 11z"/>
                </svg>
                </button>
            </div>

            </div>


        
        </div>

        <div className="flex justify-end">
            <div className="flex flex-col items-end gap-4">
               
                <FaGithub  size={15}/>
                <FaLinkedin size={15}/>
                <FaTwitter size={15}/>
            </div>

        </div>

      
      

      
    </section>
  )
}

export default Hero