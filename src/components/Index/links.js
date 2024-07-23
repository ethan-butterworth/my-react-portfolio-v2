import React from 'react'
import Link from 'next/link'

const links = () => {
  return (
    <div className='mx-2 flex flex-col text-6xl font-black italic lg:text-9xl lg:mx-10'>
        <Link href='/about' className=' p-1 w-48'>About</Link>
        <Link href='/portfolio' className=' p-1 w-64'>Portfolio</Link>
        <Link href='/contact' className=' p-1 w-60'>Contact</Link>
    </div>
  )
}

export default links