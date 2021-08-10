import * as React from 'react';
import Image from '.';

export default {
  title: 'Image',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const images: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
];

export const All = (): JSX.Element => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    {images.map((image, index) => (
      <Image
        key={index}
        src={`https://picsum.photos/100/100/?image=${index}`}
        alt="placeholder"
        className={'test'}
      />
    ))}
  </div>
);
