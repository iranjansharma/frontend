import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className='bg-gradient-to-r from-[#5153cc] to-[#2ac9cd]'>
      <div className='container mx-auto h-screen flex  justify-center items-center'>
        <h1 className='text-6xl font-black leading-12 -mt-36 text-left mx-auto w-1/2'>
          Hii,
          <br /> I am Ranjan Sharma, FullStack Web Developer !
        </h1>
        <img
          src='/hero.svg'
          alt=''
          className='w-1/2 h-1/2 -mt-36'
          draggable='false'
        />
      </div>
    </div>
  );
};

export default Home;
