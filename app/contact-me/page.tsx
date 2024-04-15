import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
    >
      <div 
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className='right-4 h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white'
      >
        <div className='p-10 w-[70%] md:w-[50%] w-full'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default page