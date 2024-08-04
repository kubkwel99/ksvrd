/** @format */

import { useState, useCallback } from 'react';
import videos from '@/public/videos.json';

type Video = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
};

export function useVideoFunctions() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const playVideo = useCallback(
    (video: Video) => {
      setSelectedVideo(video);
    },
    [setSelectedVideo]
  );

  const closeVideo = useCallback(() => {
    setSelectedVideo(null);
  }, [setSelectedVideo]);

  const handlePrevVideo = useCallback(() => {
    if (selectedVideo) {
      const currentIndex = videos.findIndex(
        (video: { id: number }) => video.id === selectedVideo.id
      );
      const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
      setSelectedVideo(videos[prevIndex]);
    }
  }, [selectedVideo]);

  const handleNextVideo = useCallback(() => {
    if (selectedVideo) {
      const currentIndex = videos.findIndex(
        (video: { id: number }) => video.id === selectedVideo.id
      );
      const nextIndex = (currentIndex + 1) % videos.length;
      setSelectedVideo(videos[nextIndex]);
    }
  }, [selectedVideo]);

  return {
    selectedVideo,
    playVideo,
    closeVideo,
    handlePrevVideo,
    handleNextVideo,
  };
}
