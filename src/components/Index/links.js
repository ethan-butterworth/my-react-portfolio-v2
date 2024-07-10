import React from 'react'
import Link from 'next/link'

const links = () => {
  return (
    <div className='flex flex-col text-6xl font-black mt-10 italic'>
        <Link href='/about' className=' p-1'>About</Link>
        <Link href='/portfolio' className=' p-1'>Portfolio</Link>
        <Link href='/contact' className=' p-1'>Contact</Link>
    </div>
  )
}

export default links