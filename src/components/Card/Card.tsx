import { FC } from 'react';

const Card: FC = () => {
  return (
    <div className='flex justify-center'>
      <div className='rounded-lg shadow-lg bg-white max-w-sm'>
        <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
          <img
            className='rounded-t-lg'
            src='https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/1Td2vgC8TOCkJIx2FSDg'
            alt=''
          />
        </a>
        <div className='p-6 text-center my-6'>
          <h5 className='text-gray-900 hover:text-pink-600 duration-200 text-xl font-black mb-2'>
            Mastering Kubernetes
          </h5>
          <p className='text-gray-700 text-lg font-medium text-center mb-4'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
