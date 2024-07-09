import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
          <div>
            <Link href="/"><img src='/logo.png' alt='Logo and Home button.' className='h-20 p-1'></img></Link>
          </div>
          <div className='flex'>
            <a><img src='/cv.svg' alt='Download a copy of my CV.' className='h-10 p-1'></img></a>
            <a><img src='/linked-in.svg' alt='Visit my Linked-In page.' className='h-10 p-1'></img></a>
            <a><img src='/github.svg' alt='Visit my Github page.' className='h-10 p-1'></img></a>
          </div>
        </div>
    </div>
  )
}

export default nav