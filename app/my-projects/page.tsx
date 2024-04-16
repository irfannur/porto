
"use client"
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React, { useState } from 'react'

const page = () => {

  return (

    <div
      style={{ backgroundImage: "url(/main-bg.webp)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    >
      <div className='mt-[100px] grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] overflow-auto flex flex-wrap hide-scroll'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default page