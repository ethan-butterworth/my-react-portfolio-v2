import React from 'react'
import AltNav from '../../components/common/alt-nav';
import Links from '../../components/contact/links';
import Footer from '../../components/common/footer';

const page = () => {
  return (
    <div className='mx-2'>
        <AltNav />
        <Links />
        <Footer />
    </div>
  )
}

export default page