import { FC } from 'react';
import Card from '../components/Card/Card';

const Projects: FC = () => {
  return (
    <div className='container mx-auto h-screen'>
      <h1 className='text-6xl font-black pt-5 text-center custom my-10'>
        Projects
      </h1>
      <div className='grid grid-cols-3 gap-4 px-30'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
