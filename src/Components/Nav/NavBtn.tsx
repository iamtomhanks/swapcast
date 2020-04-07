// Modules
import React from 'react';

// Styles
import './NavBtn.scss';

interface Props {
  text: string;
  onClick(): void;
}

const NavBtn = ({ text, onClick }: Props) => {
  return (
    <button
      type='button'
      className='nav-btn-component'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export {
  NavBtn,
};