import React from 'react'

const links = () => {

    const sections = [
        {
            image: '/email.svg',
            title: 'ethan14butterworth@gmail.com',
            link: 'mailto:ethan14butterworth@gmail.com',
        },
        {
            image: '/linked-in.svg',
            title: 'Ethan Butterworth',
            link: 'https://uk.linkedin.com/in/ethan-butterworth-012960185',
        },
    ];


    const renderSections = () => {
        return sections.map((section, index) => (
            <div key={index} className='lg:mx-10'>
                <a href={section.link} target='_blank' className='flex mb-1'>
                <img src={section.image} alt={section.title} className='w-6'></img>
                <h2 className='ml-1 text-lg lg:text-2xl'>{section.title}</h2>
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

export default links