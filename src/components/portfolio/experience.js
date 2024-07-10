import React from 'react'

const imagepaths = [
  '/experience/visual-studio-code.svg',
    '/experience/html-5.svg',
    '/experience/css-3.svg',
    '/experience/github.svg',
    '/experience/javascript.svg',
    '/experience/node-js.svg',
    '/experience/react.svg',
    '/experience/vercel.svg',
    '/experience/figma.svg',
    '/experience/next-js.svg',
    '/experience/tailwind.svg',
];

const experience = () => {
  return (
    <div className='flex animate-scroll'>
        {imagepaths.concat(imagepaths).map((path, index) => (
        <img key={index} src={path} alt={`Image ${index + 1}`} className='bg-gray rounded p-1 m-1 w-20 h-20'/>
        ))}
    </div>
  )
}

export default experience