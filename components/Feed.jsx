
import Image from 'next/image'

const Feed = () => {
  return (
    <section className=" w-full  flex flex-col-reverse  sm:flex-row mt-14  sm:mt-44 shadow-md ">
        
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
              Dev Design
          </p>
          <p className="desc-sub leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia iste tenetur, 
              quae ratione ipsa expedita, aperiam, ex corrupti nihil harum maiores sit fuga. 
              Quasi ullam fuga rem officiis unde.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia iste tenetur, 
              quae ratione ipsa expedita, aperiam, ex corrupti nihil harum maiores sit fuga. 
              Quasi ullam fuga rem officiis unde.
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

      <div className="flex-item flex-1 flexItem p-16 flexItem">
        
        <img src="/assets/images/localman.png" alt="Your Image" className="max-w-full max-h-full object-contain" />
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