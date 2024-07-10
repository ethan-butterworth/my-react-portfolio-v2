import React from 'react'
import AltNav from '../../components/common/alt-nav'
import Text from '../../components/about/text'
import Footer from '../../components/common/footer'

const page = () => {
  return (
    <div>
        <AltNav />
        <Text />
        <Footer />
        <img src='/about-image.jpg' alt='Ethan during a hike overlooking the Peak District and Oldham in the distance' className='hidden'></img>
    </div>
  )
}

export default page