'use client'
import React, { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log(formData);
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto   pt-6 pb-8 ">
      <div className=" flex flex-col">
        <label htmlFor="name" className="block text-gray-700 text-sm mb-2">FULL NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className='border-b-2 border-black w-96'
        />
      </div>
      <div className=" flex flex-col">
      <label htmlFor="name" className="block text-gray-700 text-sm mb-2 mt-8">EMAIL ADDRESS</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='border-b-2 border-black w-96'
        />
      </div>
      <div className=" flex flex-col">
        <label htmlFor="name" className="block text-gray-700 text-sm mb-2 mt-8">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className='border-b-2 border-black w-96'
          />
      </div>
      <button type="submit" className=" w-96 mt-10 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Submit</button>
    </form>
  )
}

export default ContactForm