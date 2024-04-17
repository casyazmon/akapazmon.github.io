
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id='contact' className=" w-full flex flex-col shadow-lg bg-white py-20 items-center">

      <div className="flex flex-col text-center">
        <h2 className="font-bold text-3xl sm:text-4xl">
          Contact me today. 
        </h2>
        <h3 className='mt-4 text-lg font-bold pb-20'>
          Fill the form or send us an email<br/>
          <span style={{ color: '#FEB103' }}> info@akapazmon.com</span>
        </h3>
        
      </div>
    

        <div className="flex px-10 ">
        <ContactForm/>
        </div>
        
  </section>
  )
}

export default Contact