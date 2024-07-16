import React from 'react'
import AltNav from '../../components/common/alt-nav'
import ScrollBar from '../../components/about/scroll-bar'
import Text from '../../components/about/text'
import Footer from '../../components/common/footer'

const page = () => {
  return (
    <div>
        <AltNav />
        <div className='flex'>
          <ScrollBar />
          <Text />
        </div>
        <Footer />
        <img src='/about-image.jpg' alt='Ethan during a hike overlooking the Peak District and Oldham in the distance' className='max-lg:hidden'></img>
    </div>
  )
}

export default page