import Image from 'next/image'

const Experience = () => {
  return (
    <section id='experiences' className=" w-full flex-col  sm:flex-row mt-14  sm:mt-44 shadow-md pt-16 pb-24 bg-white items-center ">
      <div className=" text-center pb-16">
        <h2 className="head_text">Experiences</h2>
      </div>

      <div className="flex-col">

      <div className=" flex  flex-1 py-10 sm:py-6 px-7  space-x-4 sm:space-x-9 justify-center">
        <div className="sm:flex sm:w-32 ">
          <h3 className="sm:text-xl hidden md:block">2021 - 2024</h3>
          <div className="flex-col justify-center ">
            <h3 className="md:hidden text-l text-center transform pt-10">Jan <span>2021</span></h3>
            <h3 className="md:hidden text-l text-center transform py-5">to</h3>
            <h3 className="md:hidden text-l transform text-center">Feb <span>2024</span></h3>
          </div>
        </div>
        

        <div class="flex ">
          <div class="relative">
            <div class="w-6 h-6 bg-orange-400 rounded-full"></div>
            <div class="absolute left-1/2 top-8  transform -translate-x-1/4 min-h-full w-0.5 bg-rose-500"></div>
          </div>
        </div>

       
      
        

        

        <div className="flex flex-col  sm:w-1/2">
          <h1 className="font-extrabold text-2xl text-black ">
          Computer Science <span className='text-outline'>Teacher.</span><br className="max-md:hidden" />
              
          </h1>
          <p className="desc">
              Government Bilingual High School
          </p>
          <p className="text-gray-500">Bafoussam | Cameroon</p>
          <ul className='desc-sub leading-relaxed mt-2'>
            <li>
            Developed interactive lesson plans for 200 students, covering Algorithms, Programming, Databases, and school IT
            infrastructure management.
            </li>
            <li>
            Implemented innovative teaching methods to engage students in programming languages such as C, C++ and SQL.
            </li>
            <li>
            Organized and facilitated extracurricular activities, including coding clubs and hackathons.
            </li>
            <li>
            Enabled 150 students to participate in e-learning by managing internet services.
            </li>
          </ul>
        </div>
        
      </div>




      <div className=" flex  flex-1 py-8 sm:py-6 px-7  bg-white space-x-4 sm:space-x-9 justify-center">
        <div className="sm:flex sm:w-32 ">
          <h3 className="sm:text-xl hidden md:block">2017 - 2019</h3>
          <div className="flex-col justify-center ">
            <h3 className="md:hidden text-l text-center transform pt-10">Jun <span>2017</span></h3>
            <h3 className="md:hidden text-l text-center transform py-5">to</h3>
            <h3 className="md:hidden text-l transform text-center">April <span>2019</span></h3>
          </div>
        </div>
        

        <div class="flex ">
          <div class="relative">
            <div class="w-6 h-6 bg-orange-400 rounded-full"></div>
            <div class="absolute left-1/2 top-8  transform -translate-x-1/4 min-h-full w-0.5 bg-rose-500"></div>
          </div>
        </div>

       
      
        

        

        <div className="flex flex-col  sm:w-1/2">
          <h1 className="font-extrabold text-2xl text-black ">
          
          Software <span className='text-outline'>Developer.</span><br className="max-md:hidden" />
              
          </h1>
          
          <p className="desc">
             Afkanerd Inc
          </p>
          <p className="text-gray-500">Bambili | Cameroon</p>
          <ul className='desc-sub leading-relaxed mt-2'>
            <li>
            Led the development of an award-winning telemedicine video and text chat system, facilitating real-time access to doctors
            and healthcare services for over 600 patients in underserved rural areas. The system leveraged JavaScript, WebRTC, and Node.js technologies.
            </li>
            <li>
            Collaborated with designers and product managers to translate requirements into working software solutions.
            </li>
            <li>
            Developed robust backend functionalities using Java (Spring boot) and ensured efficient data management with SQL databases.
            </li>
            <li>
            Performed unit and integration testing to ensure code quality and application stability.
            </li>
          </ul>
        </div>
        
      </div>


      <div className=" flex  flex-1 py-8 sm:py-6 px-7  bg-white space-x-4 sm:space-x-9 justify-center">
        <div className="sm:flex sm:w-32 ">
          <h3 className="sm:text-xl hidden md:block">2016 - 2022</h3>
          <div className="flex-col justify-center ">
            <h3 className="md:hidden text-l text-center transform pt-10">Sept <span>2016</span></h3>
            <h3 className="md:hidden text-l text-center transform py-5">to</h3>
            <h3 className="md:hidden text-l transform text-center">Feb <span>2022</span></h3>
          </div>
        </div>
        

        <div class="flex ">
          <div class="relative">
            <div class="w-6 h-6 bg-orange-400 rounded-full"></div>
            <div class="absolute left-1/2 top-8  transform -translate-x-1/4 min-h-full w-0.5 bg-rose-500"></div>
          </div>
        </div>

       
      
        

        

        <div className="flex flex-col  sm:w-1/2">
          <h1 className="font-extrabold text-2xl text-black ">
          Community <span className='text-outline'>Organizer.</span><br className="max-md:hidden" />
              
          </h1>
          <p className="desc">
             Google Developers Group
          </p>
          <p className="text-gray-500">Bamenda | Cameroon</p>
          <ul className='desc-sub leading-relaxed mt-2'>
            <li>
            Spearheaded the growth and development of a student-run community focused on Google developer technologies.
            </li>
            <li>
            Organized workshops, hackathons, and guest speaker events to promote skill development and project building.
            </li>
            <li>
            Mentored and guided fellow students in their technical journeys, fostering a collaborative learning environment.
            </li>
            
            <li>
            Led the organization of meetups, workshops, and conferences focused on Google developer technologies (Android, Cloud Platform).
            </li>
            <li>
            Cultivated a thriving developer community by promoting networking and fostering connections.
            </li>
          </ul>
        </div>
        
      </div>
      </div>
    

     


    
      

      
    </section>
  )
}

export default Experience