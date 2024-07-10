import React from 'react'

const bio = () => {
  return (
    <div className='mt-10 flex flex-col items-center'>
        <p>Nice to meet you, I'm</p>
        <h1 className='text-3xl text-bright-blue font-black'>Ethan Butterworth.</h1>
        <img src='/my-pic.jpg' alt='Ethan Butterworth' className='h-64 rounded-full m-5'></img>
        <p>Support Engineer at Zuto.</p>
        <p>Self-taught Web Developer and Designer.</p>
    </div>
  )
}

export default bio