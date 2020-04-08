// Modules
import React from 'react';

// Styles
import './Loader.scss';

// Components

type Props = {

};

const Loader = (props: Props) => {
  return (
    <div className='loader-component'>
      <img
        src='assets/imgs/loader.gif'
        alt='swapcast-loader'
      />
    </div>
  );
};

export {
  Loader,
};