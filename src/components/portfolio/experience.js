import React from 'react'

const imagepaths = [
    '/experience/css-3.svg',
    '/experience/figma.svg',
    '/experience/github.svg',
    '/experience/html-5.svg',
    '/experience/javascript.svg',
    '/experience/next-js.svg',
    '/experience/node-js.svg',
    '/experience/node-js.svg',
    '/experience/react.svg',
    '/experience/tailwind.svg',
    '/experience/vercel.svg',
    '/experience/visual-studio-code.svg',
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