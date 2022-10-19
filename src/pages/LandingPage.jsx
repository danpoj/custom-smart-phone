import { AiFillApple } from 'react-icons/ai';
import { SiSamsung } from 'react-icons/si';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-10'>
      <h1 className='font-mono text-2xl'>customize it</h1>
      <div className='flex gap-4'>
        <Link
          to='/apple'
          className='w-[360px] h-[200px] rounded-xl shadow-lg font-mono flex items-center justify-center gap-1 hover:bg-gradient-to-tr hover:from-fuchsia-100 hover:to-cyan-200 cursor-pointer active:scale-95 transition'
        >
          <AiFillApple className='text-3xl text-stone-400' />
          <span className=''>iPhone</span>
        </Link>
        <Link
          to='/galaxy'
          className='w-[360px] h-[200px] rounded-xl shadow-lg font-mono flex items-center justify-center gap-1 hover:bg-gradient-to-tr hover:from-fuchsia-100 hover:to-cyan-200 cursor-pointer active:scale-95 transition'
        >
          <SiSamsung className='text-5xl text-cyan-600' />
          <span>Galaxy</span>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
