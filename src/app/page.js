import React from 'react'
import Nav from '../components/common/nav'
import Links from '../components/Index/links'
import Bio from '../components/Index/bio'
import Footer from '../components/common/footer'

const homepage = () => {
  return (
    <div>
      <Nav />
      <Links />
      <Bio />
      <Footer />
    </div>
  )
}

export default homepage;