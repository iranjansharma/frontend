import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div>
      <div className='overlay'> </div>
      <div className='container mx-auto flex justify-center items-center h-3/4'>
        <span className='loader'></span>
      </div>
    </div>
  );
};

export default Loader;
