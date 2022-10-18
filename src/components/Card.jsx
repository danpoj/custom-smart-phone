import React from 'react';

const Card = ({ text }) => {
  return (
    <div className='w-[30%] h-[30%] rounded-xl shadow-lg font-mono flex items-center justify-center hover:bg'>
      {text}
    </div>
  );
};

export default Card;
