import { FC } from 'react';
import Card from '../components/Card/Card';

const About: FC = () => {
  return (
    <div>
      <div className='container mx-auto py-5'>
        <h1 className='text-6xl font-black pt-5 text-center custom'>
          About Me
        </h1>
      </div>
      <Card />
    </div>
  );
};

export default About;
