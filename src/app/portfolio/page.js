import React from 'react'
import AltNav from '../../components/common/alt-nav'
import Experience from '../../components/portfolio/experience'
import Projects from '../../components/portfolio/projects'
import Footer from '../../components/common/footer'

const page = () => {
  return (
    <div>
        <AltNav />
        <Experience />
        <Projects />
        <Footer />
    </div>
  )
}

export default page