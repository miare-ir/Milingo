import * as React from 'react';
import Image from '.';

export default {
  title: 'Image',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const images: string[] = ['1', '2', '3', '4'];

export const All = (): JSX.Element => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    {images.map((image, index) => (
      <Image
        key={index}
        src={require('./logo-192x192.png')}
        alt="placeholder"
        className={'test'}
      />
    ))}
    <Image
      src={require('./logo-192x192.png')}
      alt="thumbnail"
      className={'test'}
      thumbnailInfo={{
        originalSrc: require('./logo-512x512.png'),
      }}
    />
  </div>
);
