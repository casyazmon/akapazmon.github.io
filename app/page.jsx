import Contact from "@components/Contact"
import Experience from "@components/Experience"
import Hero from "@components/Hero"
import Project from "@components/Project"
import Skills from '@components/Skills'
import Image from 'next/image'
import About from "@components/About"
const Home = () => {
  return (
    <div >
      
      <Hero/>
      
      <About/>
      
      <Experience/>
      
      <Project/>
      <Skills/>
      
      <Contact/>
      
    </div>
  )
}

export default Home