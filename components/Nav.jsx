"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const handleDarkModeChange = () => {
        setIsDarkMode(!isDarkMode)
    }

    const menuItems =['About', 'Experiences', 'Projects', 'Skills','Stories','Contact']

    // const menuItems =[
    //     {"name":"About","link":"about"},
    //     {"name":"Experiences","link":"experiences"},
    //     {"name":"Projects","link":"projects"},
    //     {"name":"skills","link":"skills"},
    //     {"name":"Contact","link":"contact"}
    // ]

  return (
    <nav className=" flex-between w-full   bg-white  shadow-md p-5">
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
                src="/assets/images/logo.png"
                alt='Promptopia logo'
                width={30}
                height={30}
                className='object-contain'

            />
            <p className="font-inter text-2xl  font-extrabold">
                azmon
            </p>
        </Link>

        <div className="flex gap-4 flex-center">
            
            {menuItems.map((item, index) => (
                <Link href={"#"+item.toLocaleLowerCase()} key={index} className='logo_text' >{item}</Link>
            ))}
            


        </div>

        {/* Desktop Navigation: make hiddent in small devices */}
        <div className="sm:flex hidden sm:px-10">
            <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                    <input
                    type='checkbox'
                    checked={isDarkMode}
                    onChange={handleDarkModeChange}
                    className='sr-only'
                    />
                    <div className='block h-8 w-14 rounded-full bg-amber-400'></div>
                    <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full ${isDarkMode? 'bg-[#232B2B]': 'bg-white'} transition ${isDarkMode ? 'translate-x-6' : ''}`}></div>
                </div>
            </label>
            {/* {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt" className='black_btn'>
                        Create Post
                    </Link>
                    <button type='button' className='outline_btn'>
                        <Link href="/signup">
                            Sign In
                        </Link>
                    </button>
                    <Link href="/profile">
                        <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                        
                        />
                    </Link>

                </div>
            ): (
                <>
                
                </>
            )} */}

        </div>

        
        {/*Mobile Navigation */}
        <div className="sm:hidden flex relative ">
            <div className="flex">
                <Image
                        src="/assets/icons/menu.svg"
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    
                    />
                    

                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link
                                href="/#about"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                About
                            </Link>

                            <Link
                                href="#skills"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Skills
                            </Link>

                            <Link
                                href="#experiences"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Experiences
                            </Link>

                            <Link
                                href="#projects"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Projects
                            </Link>

                            <Link
                                href="#contact"
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Contact
                            </Link>

                            {/* <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut()
                                }}
                                className='mt-5 w-full black_btn'>
                                Experiencs
                            </button> */}

                        </div>
                    )}

            </div>
        </div>
    </nav>
  )
}

export default Nav