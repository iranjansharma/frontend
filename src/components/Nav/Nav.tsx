import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div
      className={
        colorChange
          ? 'bg-slate-50 duration-300 ease-linear sticky top-0 z-50 '
          : ' bg-transparent'
      }
    >
      <div className='container flex mx-auto text-center justify-between py-4 px-2'>
        <div>
          <Link to='/'>
            <h1 className='text-2xl md:text-3xl text-black font-black'>
              Ranjan Sharma
            </h1>
          </Link>
        </div>
        <div className='hidden md:flex space-x-8 mx-4 items-center'>
          <Link to='/'>
            <h1 className='text-base text-black font-bold hover:text-red-500 duration-200'>
              Home
            </h1>
          </Link>
          <Link to='/about'>
            <h1 className='text-base text-black font-bold hover:text-red-500 duration-200'>
              About
            </h1>
          </Link>
          <Link to='/work'>
            <h1 className='text-base text-black font-bold hover:text-red-500 duration-200'>
              Skills
            </h1>
          </Link>
          <Link to='/projects'>
            <h1 className='text-base text-black font-bold hover:text-red-500 duration-200'>
              Projects
            </h1>
          </Link>
          <button className='px-4 py-1.5 bg-red-500 duration-500 rounded-tr-lg rounded-bl-lg'>
            <a href='/'>
              <h1 className='text-base text-black font-bold hover:text-white duration-300'>
                <a href='mailto:just.think2003@gmail.com'>Contact</a>
              </h1>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
