import React from 'react'
import AltNav from '../../components/common/alt-nav'
import ScrollBar from '../../components/about/scroll-bar'
import Text from '../../components/about/text'
import Footer from '../../components/common/footer'

const page = () => {
  return (
    <div>
        <AltNav />
        <div className='flex items-center'>
          <div className='flex'>
            <ScrollBar />
            <Text />
          </div>
          <img src='/about-image.jpg' alt='Ethan during a hike overlooking the Peak District and Oldham in the distance' className='max-lg:hidden h-full w-1/2 p-5'></img>
        </div>
        <Footer />
        
    </div>
  )
}

export default page