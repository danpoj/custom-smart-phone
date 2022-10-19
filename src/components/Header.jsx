import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link
      to='/'
      className='fixed top-4 inset-x-0 flex items-center gap-2 left-4 cursor-pointer hover:text-rose-300 hover:animate-pulse z-40'
    >
      <BiHomeAlt className='text-3xl' />
    </Link>
  );
};

export default Header;
