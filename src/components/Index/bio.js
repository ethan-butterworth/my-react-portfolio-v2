import React from 'react'

const bio = () => {
  return (
    <div className='mt-10 flex flex-col items-center lg:w-1/2'>
        <p>Nice to meet you, I'm</p>
        <h1 className='text-3xl text-bright-blue font-black lg:text-5xl'>Ethan Butterworth.</h1>
        <img src='/my-pic.jpg' alt='Ethan Butterworth' className='h-64 rounded-full m-5 lg:h-80'></img>
        <p>Support Engineer at Zuto.</p>
        <p>Self-taught Web Developer and Designer.</p>
    </div>
  )
}

export default bio