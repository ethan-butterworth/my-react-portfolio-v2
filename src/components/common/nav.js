import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
      <div className='flex justify-between items-center mx-2 mt-1 mb-10 lg:mx-10 lg:mt-5'>
        <div>
          <Link href='/'><img src='/logo.png' alt='Logo and Home button.' className='h-20 p-1 lg:h-28'></img></Link>
        </div>
        <div className='flex'>
          <a href='/ethan-butterworth-cv.docx' target='_blank'><img src='/cv.svg' alt='Download a copy of my CV.' className='h-10 p-1 lg:h-14'></img></a>
          <a href='https://uk.linkedin.com/in/ethan-butterworth-012960185' target='_blank'><img src='/linked-in.svg' alt='Visit my Linked-In page.' className='h-10 p-1 lg:h-14'></img></a>
          <a href='https://github.com/ethan-butterworth' target='_blank'><img src='/github.svg' alt='Visit my Github page.' className='h-10 p-1 lg:h-14'></img></a>
        </div>
      </div>
  )
}

export default nav