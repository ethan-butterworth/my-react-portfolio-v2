import React from 'react'
import Nav from '../components/common/nav'
import Links from '../components/Index/links'
import Bio from '../components/Index/bio'
import Footer from '../components/common/footer'

const homepage = () => {
  return (
    <div className='flex-col justify-between lg:h-screen lg:flex'>
      <Nav />
      <div className='lg:flex justify-between items-center'>
        <Links />
        <Bio />
      </div>
      <Footer />
    </div>
  )
}

export default homepage;