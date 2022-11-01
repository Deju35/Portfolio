import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-5xl font-bolder'>
              <p>Hi There. I'm Deju, lovely to meet you. Go on, have a look around.</p>
            </div>
            <div>
              <p>I am a life long Computer Science enthusiast passionate about building excellent software that improves
              the lives of those around me.  My main interest lies in web development because I enjoy watching my ideas come to life on a wide range of devices. Lets work together to achieve your Goals</p>  
            </div>
          </div>
      </div>
    </div>
    

  );
}

export default About