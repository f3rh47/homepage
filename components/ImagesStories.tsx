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
  ];

  return <Stories stories={stories} classNames={classNames} />;
}
