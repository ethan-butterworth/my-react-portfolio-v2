import React from 'react'

const projects = () => {

  const sections = [
    {
      title: 'First Portfolio',
      image: '/projects/my-first-portfolio-preview.png',
      link: 'https://ethan-butterworth.github.io/my-portfolio/',
    },
    {
      title: 'First React Portfolio',
      image: '/projects/my-first-react-portfolio-preview.png',
      link: 'https://my-react-portfolio-olive.vercel.app/',
    },
  ];

  const renderSections = () => {
    return sections.map((section, index) => (
      <div key={index} className='mb-5 rounded'>
        <img src={section.image} alt={section.title} className='bg-bright-blue p-1 rounded'></img>
        <a href={section.link} target='_blank' className='flex justify-between ml-1 mr-1'>
          <h2 className='text-2xl font-black italic'>{section.title}</h2>
          <img src='/link.svg' className='w-8'></img>
        </a>
      </div>
    ));
  };

  return (
    <div>
      {renderSections()}
    </div>
  )
}

export default projects