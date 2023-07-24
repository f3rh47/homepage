'use client';

import Stories from 'stories-react';
import 'stories-react/dist/index.css';

export default function ImagesStories() {
  const classNames = {
    main: 'custom-story-main',
    progressContainer: 'custom-progress-container',
    storyContainer: 'custom-story-container',
  };

  const stories = [
    {
      type: 'image',
      url: '/stories/1.jpg',
    },
    {
      type: 'video',
      url: '/stories/2.mp4',
    },
    {
      type: 'image',
      url: '/stories/3.jpg',
    },
    {
      type: 'image',
      url: '/stories/4.jpg',
    },
    {
      type: 'image',
      url: '/stories/5.jpg',
    },
    {
      type: 'video',
      url: '/stories/6.mp4',
    },
    {
      type: 'image',
      url: '/stories/7.jpg',
    },
    {
      type: 'image',
      url: '/stories/8.jpg',
    },
    {
      type: 'video',
      url: '/stories/9.mp4',
    },
    {
      type: 'image',
      url: '/stories/10.jpg',
    },
    {
      type: 'image',
      url: '/stories/11.jpg',
    },
    {
      type: 'image',
      url: '/stories/12.jpg',
    },
    {
      type: 'image',
      url: '/stories/13.jpg',
    },
    {
      type: 'image',
      url: '/stories/14.jpg',
    },
    {
      type: 'video',
      url: '/stories/15.mp4',
    },
    {
      type: 'image',
      url: '/stories/16.jpg',
    },
    {
      type: 'image',
      url: '/stories/17.jpg',
    },
    {
      type: 'image',
      url: '/stories/18.jpg',
    },
    {
      type: 'image',
      url: '/stories/19.jpg',
    },
    {
      type: 'image',
      url: '/stories/20.jpg',
    },
    {
      type: 'video',
      url: '/stories/21.mp4',
    },
    {
      type: 'video',
      url: '/stories/22.mp4',
    },
    {
      type: 'video',
      url: '/stories/23.mp4',
    },
    {
      type: 'image',
      url: '/stories/24.jpg',
    },
    {
      type: 'image',
      url: '/stories/25.jpg',
    },
    {
      type: 'video',
      url: '/stories/26.mp4',
    },
    {
      type: 'video',
      url: '/stories/27.mp4',
    },
    {
      type: 'video',
      url: '/stories/28.mp4',
    },
    {
      type: 'image',
      url: '/stories/29.jpg',
    },
    {
      type: 'image',
      url: '/stories/30.jpg',
    },
    {
      type: 'image',
      url: '/stories/31.jpg',
    },
  ];

  return <Stories stories={stories} classNames={classNames} />;
}
