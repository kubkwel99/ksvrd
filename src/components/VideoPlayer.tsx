/** @format */

// components/VideoPlayer.tsx
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className='flex shrink-0'>
      <ReactPlayer
        url={videoUrl}
        controls
        playing
        width={''}
        // height={'650px'}
        style={{
          background: 'black',
          position: 'relative',
          float: 'left',
          objectFit: 'contain',
          padding: 0,
          margin: 0,
          minWidth: "320px",
          minHeight: '650px',
        }}
      />
    </div>
  );
};

export default VideoPlayer;
