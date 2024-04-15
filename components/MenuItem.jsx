'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const MenuItem = () => {
    const [activeSection, setActiveSection] = useState(null);
  return (
    <ul className="fixed right-0 top-1/2 transform -translate-y-1/2">
      <li className={`h-10 w-1 border-r border-gray-400 ${activeSection === 'about' ? 'bg-blue-500 border-blue-700' : ''}`}>
        <Link href="/about">About</Link>
      </li>
      <li className={`h-10 w-1 border-r border-gray-400 ${activeSection === 'projects' ? 'bg-blue-500 border-blue-700' : ''}`}>
        <Link href="/projects">Projects</Link>
      </li>
      {/* Add more menu items for other sections */}
    </ul>
  )
}

export default MenuItem