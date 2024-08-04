/** @format */

// pages/portfolio.tsx

import React, { useEffect, useRef } from 'react';
import { GetStaticProps } from 'next';
import { Video } from '@/types';
import videosData from '@/public/videos.json';
import { useVideoFunctions } from './portfolio/useVideoFunctions';
import VideoPlayer from './../components/VideoPlayer';

import './portfolio/customs.css';
import { motion } from 'framer-motion';
import { fadeIn, footerVariants, headerVariants, slideIn } from '@/types/motion';

interface PortfolioProps {
  videos: Video[];
}

const PortfolioPage: React.FC<PortfolioProps> = ({ videos }) => {
  const { selectedVideo, playVideo, closeVideo, handlePrevVideo, handleNextVideo } =
    useVideoFunctions();

  const videoPlayerRef = useRef<HTMLDivElement>(null);

  const handleVideoPlay = (video: Video) => {
    playVideo(video);
  };

  const handleVideoClose = () => {
    closeVideo();
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleVideoClose();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (videoPlayerRef.current && !videoPlayerRef.current.contains(event.target as Node)) {
      handleVideoClose();
    }
  };

  useEffect(() => {
    if (selectedVideo) {
      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedVideo]);

  return (
    <>
      <div
        className='p-20 mx-auto flex flex-col items-center text-white'
        style={{
          boxShadow: 'inset 0 7px 19px -7px black',
        }}>
        <a
          className='anchor absolute '
          style={{
            top: '205%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          id='portfolio'></a>
        <h1 className='pb-20 text-6xl'>Portfólio</h1>
        <motion.div
          className='grid grid-cols-3 place-items-center gap-2 m-auto'
          initial='hidden'
          whileInView='show'
          variants={headerVariants}
          viewport={{ once: false, amount: 0.15 }}>
          {videos
            .slice()
            .reverse()
            .map((video, i) => (
              <motion.div key={video.id}>
                <motion.video
                  variants={slideIn('right', 'tween', (i + 1) * 0.2, 1)}
                  className='cursor-pointer w-72 h-auto object-cover'
                  style={{ aspectRatio: '1 / 1' }}
                  onClick={() => handleVideoPlay(video)}>
                  <motion.source
                    src={video.videoUrl}
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </motion.video>
              </motion.div>
            ))}
        </motion.div>
        {selectedVideo && (
          <motion.div
            initial='hidden'
            whileInView='show'
            variants={footerVariants}
            viewport={{ once: false, amount: 0.2 }}
            ref={videoPlayerRef}
            id='VideoPlayer'
            style={{ transform: 'translate(-50%, -50%)', top: '25%', left: '0%' }}
            className='fixed flex flex-col items-center justify-center text-white h-2/4 w-full transition-all'>
            <div className='frame p-2 h-full flex flex-row items-center '>
              <button
                onClick={handlePrevVideo}
                className='left text-white p-12'>
                <i className='fa-solid fa-chevron-left'></i>
              </button>
              <motion.div
                variants={fadeIn('down', 'tween', 0.15, 0.15)}
                className='videoGrid flex flex-row flex-nowrap grow-0 justify-between h-full'>
                <VideoPlayer videoUrl={selectedVideo.videoUrl} />
                <div
                  className='videoInfo flex flex-col items-center justify-start py-6 gap-8 px-6 bg-black'
                  style={{ minHeight: '650px' }}>
                  <button
                    onClick={handleVideoClose}
                    className='ml-auto text-white z-100 px-2'>
                    <i className={'fas fa-times'}></i>
                  </button>
                  <h1 className='font-bold text-2xl w-80'>{selectedVideo.title}</h1>
                  <p>{selectedVideo.description}</p>
                </div>
              </motion.div>
              <button
                onClick={handleNextVideo}
                className='right text-white p-12'>
                <i className='fa-solid fa-chevron-right'></i>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default PortfolioPage;
