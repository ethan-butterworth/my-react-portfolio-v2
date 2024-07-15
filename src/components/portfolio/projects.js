import React from 'react'

const projects = () => {

  const sections = [
    {
      title: 'First Portfolio',
      image: '/projects/my-first-portfolio-preview.png'
    },
    {
      title: 'First React Portfolio',
      image: '/projects/my-first-react-portfolio-preview.png'
    },
  ];

  const renderSections = () => {
    return sections.map((section, index) => (
      <div key={index} className='mb-5 rounded'>
        <img src={section.image} alt={section.title} className='bg-bright-blue p-1 rounded'></img>
        <h2>{section.title}</h2>
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