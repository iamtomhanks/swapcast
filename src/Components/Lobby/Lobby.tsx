// Modules
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// Styles
import './Lobby.scss';

// Components
import { VideoStream } from 'Components/Generic/VideoStream';

interface Props extends RouteComponentProps {
}

const Lobby = ({ history }: Props) => {
  return (
    <div className='lobby-component'> 
      <VideoStream videoId='local' />
      <button
        type='button'
        className='join-room-btn'
        onClick={() => history.push('/room')}
      >
        Join Room
      </button>
    </div>
  );
};

export {
  Lobby,
};