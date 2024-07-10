import React from 'react'
import Link from 'next/link'

const altnav = () => {
  return (
    <div className='flex justify-between items-center mb-10'>
        <div>
            <Link href='/'><img src='/logo.png' alt='Logo and Home button.' className='h-20 p-1'></img></Link>
        </div>
    </div>
  )
}

export default altnav