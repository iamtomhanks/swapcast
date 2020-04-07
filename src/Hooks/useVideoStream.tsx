// Modules
import { useState, useEffect, MutableRefObject } from 'react';

const useVideoStream = (videoElRef: MutableRefObject<null>) => {
  const initVideoStream = (videoElement: HTMLVideoElement) => {
    navigator.getUserMedia(
      { video: true, audio: true },
      stream => {
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      },
      error => {
        console.warn(error.message);
      }
    );
  };

  useEffect(() => {
    const videoElement = videoElRef.current;
    if (videoElement) {
      initVideoStream(videoElement);
    }
  }, [videoElRef]);

  return null;
};

export {
  useVideoStream,
};