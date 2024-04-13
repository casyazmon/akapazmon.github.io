import Contact from "@components/Contact"
import Experience from "@components/Experience"
import Feed from "@components/Feed"
import Hero from "@components/Hero"
import Project from "@components/Project"
import Skills from '@components/Skills'
import Image from 'next/image'
const Home = () => {
  return (
    <div >
      
      <Hero/>
      
      <Feed/>
      
      <Experience/>
      
      <Project/>
      <Skills/>
      
      <Contact/>
      
    </div>
  )
}

export default Home