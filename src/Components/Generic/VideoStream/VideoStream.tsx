// Modules
import React, { useRef } from 'react';

// Styles
import './VideoStream.scss';

// Hooks
import { useVideoStream } from 'Hooks/useVideoStream';

type Props = {
  videoId: string;
};

const VideoStream = ({ videoId }: Props) => {
  const videoIdString = `video-stream-${videoId}`;
  const videoElRef = useRef(null);

  useVideoStream(videoElRef);

  return (
    <video
      className='video-stream-component'
      id={videoIdString}
      ref={videoElRef}
      autoPlay
      muted
    />
  );
};

export {
  VideoStream,
};