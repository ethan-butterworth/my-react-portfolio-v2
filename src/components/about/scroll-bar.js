"use client";

import React, { useEffect, useRef } from 'react';

const scrollbar = () => {
  const containerRef = useRef(null);
  const movingDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const movingDiv = movingDivRef.current;

      if (container && movingDiv) {
        const containerHeight = container.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        
        const scrollPercentage = scrollTop / scrollHeight;
        
        const newTop = scrollPercentage * (containerHeight - movingDiv.clientHeight);

        movingDiv.style.top = `${newTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-10 items-center mr-5 relative container">
      <div ref={movingDivRef} className="bg-bright-blue w-5 h-5 rounded-full absolute moving-div"></div>
      <div className="bg-bright-blue h-full w-1 rounded"></div>
    </div>
  );
};

export default scrollbar;
