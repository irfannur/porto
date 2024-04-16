"use client"
import { ChangeEvent, FormEvent, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var myphone = '6285338325183';
    var encodedMessage = encodeURIComponent(formData.message) + ', Email saya : ' + encodeURIComponent(formData.email);

    // Redirect user to WhatsApp URL with encoded message
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${myphone}&text=${encodedMessage}&type=phone_number`;
    window.location.href = whatsappURL;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-5 text-white'>Contact Me</h2>
      <div className='mb-3'>
        <input
          type='text'
          placeholder='Your Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>
      <div className='mb-3'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>
      <div className='mb-3'>
        <textarea
          placeholder='Your Message'
          rows={5}
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow'
        />
      </div>
      <button type='submit' className='px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
