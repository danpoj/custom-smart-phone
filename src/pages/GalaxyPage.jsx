import React from 'react';
import GalaxyS21UltraCanvas from '../components/phones/galaxy/GalaxyS21UltraCanvas';
import GalaxyS8UltraCanvas from '../components/phones/galaxy/GalaxyS8UltraCanvas';
import { SiSamsung } from 'react-icons/si';
import { Link } from 'react-router-dom';

const GalaxyPage = () => {
  return (
    <div className='flex h-screen justify-center gap-20 '>
      <div className='flex flex-col items-center'>
        <GalaxyS21UltraCanvas />
        <h2 className='font-mono text-lg select-none mb-2'>Galaxy S21 Ultra</h2>
        <div className='flex gap-1 items-center select-none'>
          <SiSamsung className='text-5xl text-cyan-500' />
          <h3 className='font-mono'>Samsung</h3>
        </div>
        <Link
          to='/apple/12-pro'
          className='rounded relative py-3 px-4 group shadow-lg select-none mt-4'
        >
          <div className='absolute -inset-0 bg-rose-400 w-0 group-hover:w-full transition-all -z-10 duration-300 rounded'></div>
          <span className='font-mono text-stone-700 group-hover:text-stone-100 transition duration-300'>
            Let's Customize
          </span>
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <GalaxyS8UltraCanvas />
        <h2 className='font-mono text-lg select-none mb-2'>
          Galaxy tab S8 Ultra
        </h2>
        <div className='flex gap-1 items-center select-none'>
          <SiSamsung className='text-5xl text-cyan-500' />
          <h3 className='font-mono'>Samsung</h3>
        </div>
        <Link
          to='/apple/12-pro'
          className='rounded relative py-3 px-4 group shadow-lg select-none mt-4'
        >
          <div className='absolute -inset-0 bg-rose-400 w-0 group-hover:w-full transition-all -z-10 duration-300 rounded'></div>
          <span className='font-mono text-stone-700 group-hover:text-stone-100 transition duration-300'>
            Let's Customize
          </span>
        </Link>
      </div>
    </div>
  );
};

export default GalaxyPage;
