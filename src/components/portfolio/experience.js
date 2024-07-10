import React from 'react'

const imagepaths = [
    '/experience/html-5.svg',
    '/experience/css-3.svg',
    '/experience/javascript.svg',
    '/experience/node-js.svg',
    '/experience/react.svg',
    '/experience/next-js.svg',
    '/experience/tailwind.svg',
    '/experience/visual-studio-code.svg',
    '/experience/github.svg',
    '/experience/vercel.svg',
    '/experience/figma.svg',
];

const experience = () => {
  return (
    <div className='flex overflow-hidden'>
        {imagepaths.map((path, index) => (
        <img key={index} src={path} alt={`Image ${index + 1}`} className='bg-gray rounded p-1 m-1 w-20 h-20'/>
        ))}
    </div>
  )
}

export default experience