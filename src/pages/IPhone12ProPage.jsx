import React, { useState } from 'react';
import Iphone12proCanvas from '../components/phones/apple/Iphone12proCanvas';
import { IoColorPaletteSharp } from 'react-icons/io5';
import { CgPlayStopR } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const IPhone12ProPage = () => {
  const [color, setColor] = useState('white');
  const [rotation, setRotation] = useState(true);

  const onColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className='w-full h-screen'>
      <Iphone12proCanvas
        width='w-full'
        height='h-screen'
        color={color}
        rotation={rotation}
        minAngle={0}
        maxAngle={Math.PI}
      />
      <div className='fixed right-0 top-[30%] justify-center py-5 px-4 border-l-2 h-60 flex flex-col gap-6'>
        <CgPlayStopR
          className='text-4xl text-stone-500 hover:text-rose-500 transition cursor-pointer'
          onClick={() => setRotation((prev) => !prev)}
        />
        <div className='relative group cursor-pointer'>
          <IoColorPaletteSharp className='text-4xl absolute text-yellow-400 inset-0 group-hover:text-emerald-400' />
          <input
            className='absolute inset-0 h-10 w-9 opacity-0'
            type='color'
            onChange={onColorChange}
          />
        </div>
        <Link
          to='/apple'
          className='font-mono text-white text-sm font-bold py-1 px-2 bg-black rounded-lg mt-9 transition hover:bg-cyan-400'
        >
          done
        </Link>
      </div>
    </div>
  );
};

export default IPhone12ProPage;
