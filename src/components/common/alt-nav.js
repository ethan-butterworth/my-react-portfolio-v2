import React from 'react'
import Link from 'next/link'

const altnav = () => {
  return (
    <div className='flex justify-between items-center mx-2 mt-1 mb-10 lg:mx-10 lg:mt-5'>
        <div>
            <Link href='/'><img src='/logo.png' alt='Logo and Home button.' className='h-20 p-1 lg:h-28'></img></Link>
        </div>
    </div>
  )
}

export default altnav