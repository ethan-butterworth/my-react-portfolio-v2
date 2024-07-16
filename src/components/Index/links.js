import React from 'react'
import Link from 'next/link'

const links = () => {
  return (
    <div className='flex flex-col text-6xl font-black mt-10 italic lg:text-9xl'>
        <Link href='/about' className=' p-1 w-48'>About</Link>
        <Link href='/portfolio' className=' p-1 w-64'>Portfolio</Link>
        <Link href='/contact' className=' p-1 w-60'>Contact</Link>
    </div>
  )
}

export default links