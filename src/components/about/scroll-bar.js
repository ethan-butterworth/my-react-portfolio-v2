import React from 'react';

const Scrollbar = () => {
  return (
    <div className="flex flex-col w-10 items-center mr-5">
      <div className="bg-bright-blue w-5 h-5 rounded-full relative top-1.5"></div>
      <div className="bg-bright-blue h-full w-1 rounded"></div>
    </div>
  );
};

export default Scrollbar;
