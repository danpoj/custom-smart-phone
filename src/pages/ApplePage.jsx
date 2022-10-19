import Iphone12proCanvas from '../components/phones/apple/Iphone12proCanvas';
import Iphone14Canvas from '../components/phones/apple/Iphone14Canvas';
import { AiFillApple } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ApplePage = () => {
  return (
    <div className='flex h-screen justify-center gap-20'>
      <div className='flex flex-col items-center'>
        <Iphone12proCanvas />
        <h2 className='font-mono text-lg select-none mb-2'>iPhone 12 pro</h2>
        <div className='flex gap-1 items-center select-none'>
          <AiFillApple className='text-2xl text-stone-500' />
          <h3 className='font-mono'>Apple</h3>
        </div>
        <Link
          to='/apple/12-pro'
          className='rounded relative py-3 px-4 group shadow-lg select-none mt-4'
        >
          <div className='absolute -inset-0 bg-rose-400 w-0 group-hover:w-full transition-all -z-10 duration-300 rounded'></div>
          <span className='font-mono text-stone-700 group-hover:text-stone-100 transition duration-300'>
            Customize It
          </span>
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <Iphone14Canvas />
        <h2 className='font-mono text-lg select-none mb-2'>iPhone 14</h2>
        <div className='flex gap-1 items-center select-none'>
          <AiFillApple className='text-2xl text-stone-500' />
          <h3 className='font-mono'>Apple</h3>
        </div>
        <Link
          to='/apple/14'
          className='rounded relative py-3 px-4 group shadow-lg select-none mt-4'
        >
          <div className='absolute -inset-0 bg-rose-400 w-0 group-hover:w-full transition-all -z-10 duration-300 rounded'></div>
          <span className='font-mono text-stone-700 group-hover:text-stone-100 transition duration-300'>
            Customize It
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ApplePage;
