import * as React from 'react';
import Thumbnail from '.';

export default {
  title: 'Thumbnail',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = (): JSX.Element => (
  <Thumbnail
    originalSrc={require('./logo-512x512.png')}
    thumbnailSrc={require('./logo-192x192.png')}
  />
);
