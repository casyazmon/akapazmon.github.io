
import Image from 'next/image'
import Link from 'next/link'

const Feed = () => {
  return (
    <section id='about' className=" w-full  flex flex-col-reverse  sm:flex-row mt-14  sm:pt-36 shadow-md ">
        
      <div className=" flex flex-item flex-1 py-16 px-7 gap-20 bg-white">
        <div className="hidden sm:flex">
          <Image
              src="/assets/icons/side-menu.png"
              width={150}
              height={250}
              className='max-w-full max-h-full object-contain'
              alt='profile'
          
          />

        </div>

        <div className="flex flex-col">
          <h1 className="head_text ">
          we eat apps <br className="max-md:hidden" />and web for<br className="max-md:hidden" /><span className='text-outline'>breakfast</span>. 
              
          </h1>
          <p className="desc">
              My story
          </p>
          <p className="desc-sub leading-relaxed">
          Results-oriented professional committed to building a successful career in software development. 
          Ability to develop custom software applications and update existing programs to refine components
          like data storage capacities and cybersecurity. Effective interpersonal skills: work well as part 
          of a team with people at all organizational levels and diverse backgrounds. Equally successful working 
          independently on time-sensitive projects and tasks.
          </p>

          <div className="flex-col pt-4">
          <p className="text-2xl font-extrabold">
              Education
          </p>
          <p className="text-lg font-semibold">
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

export default Feed