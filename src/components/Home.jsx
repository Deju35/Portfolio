import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className="text-yellow-600 text-2xl">Hello my name is</p>
         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dejen Tesfaldet</h1>
         <h2  className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>A Full Stack Software Engineer</h2>
         <p className='text-[#8892b0] py-4  text-3xl'>specializing in building responsive full stack web applications</p>
          <div>
           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-400'>View Portfolio
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
           </button>

          </div>
       </div>

    </div>
  )
}

export default Home
