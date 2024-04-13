"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    // useEffect(() => {
    //     const setProviders = async () => {
    //         const response = await getProviders();
    //         setProviders(response)
    //     }
    //     setProviders();
    // },[])

    const handleDarkModeChange = () => {
        setIsDarkMode(!isDarkMode)
    }

  return (
    <nav className="flex-between w-full   bg-white  shadow-md p-5">
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
                src="/assets/images/logo.svg"
                alt='Promptopia logo'
                width={30}
                height={30}
                className='object-contain'

            />
            <p className="logo_text">
                Akapazmon
            </p>
        </Link>

        <div className="flex gap-4 flex-center">
            <Link href="#about" className='logo_text'>
                About
            </Link>
            <Link href="#skills" className='logo_text'>
                Skills
            </Link>
            <Link href="#experiences" className='logo_text'>
                Experiences
            </Link>
            <Link href="#projects" className='logo_text'>
                Projects
            </Link>
            <Link href="#contact" className='logo_text'>
                Contact
            </Link>
            


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
                    <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full ${isDarkMode? 'bg-white': 'bg-[#232B2B]'} transition ${isDarkMode ? 'translate-x-6' : ''}`}></div>
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