"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        setProviders();
    },[])


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
            <Link href="/create-prompt" className='logo_text'>
                About
            </Link>
            <Link href="/create-prompt" className='logo_text'>
                Blog
            </Link>
            <Link href="/create-prompt" className='logo_text'>
                Contact
            </Link>

        </div>

        {/* Desktop Navigation: make hiddent in small devices */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
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
                {providers &&  Object.values(providers)
                .map((provider) => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'>
                        Sign In
                    </button>
                ))}
                </>
            )}

        </div>

        
        {/*Mobile Navigation */}
        <div className="sm:hidden flex relative">
            {isUserLoggedIn? (
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
                                    href="/profile"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>

                                <Link
                                    href="/create-prompt"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>

                                <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut()
                                }}
                                className='mt-5 w-full black_btn'>
                                    Sign Out
                                </button>


                            </div>
                        )}

                </div>
            ): (
                <>
                {providers &&  Object.values(providers)
                .map((provider) => (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'>
                        <Link href="/register">
                        Sign In
                        </Link>
                        
                    </button>
                ))}
                </>

            )}
        </div>
    </nav>
  )
}

export default Nav