import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import InfiniteScrollComponent, { InfiniteScrollProps } from '.';
import './story-styles.scss';

export default {
  title: 'Infinite Scroll',
  component: InfiniteScrollComponent,
  decorators: [story => <div className="story-container">{story()}</div>],
} as ComponentMeta<typeof InfiniteScrollComponent>;

const emotes = ['😊', '👍🏽', '🧐', '🙃', '🤨', '😑', '🥴'];

interface ExampleItemProps {
  index: number;
}

const ExampleItem: React.FC<ExampleItemProps> = ({
  index,
}: ExampleItemProps) => (
  <div className="infinite-scroll-story-example-item">
    من آیتم شماره{' '}
    <span className="infinite-scroll-story-example-item-badge">
      {(index + 1).toString().padStart(3, '0')}
    </span>{' '}
    برای نمایش دادن در کامپوننت اسکرول بینهایت هستم{' '}
    {emotes[Math.floor(Math.random() * emotes.length)]}
  </div>
);

const Template: ComponentStory<typeof InfiniteScrollComponent> = args => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<undefined[]>(
    Array.from(Array(20)).map(() => undefined),
  );
  const hasMore = data.length < 100;

  const fetchMore = (): void => {
    setLoading(true);
    setTimeout(() => {
      setData(currentData => [
        ...currentData,
        ...Array.from(Array(10)).map(() => undefined),
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <h5 className="infinite-scroll-story-guide-title">
        Scroll to fetch more...
      </h5>

      <h4 className="infinite-scroll-story-guide-description">
        {hasMore
          ? loading
            ? 'Loading...'
            : `there are ${data.length}/100 items`
          : 'Yay! you saw all 100 items'}
      </h4>

      <div className="infinite-scroll-story">
        <InfiniteScrollComponent
          {...args}
          onEnd={fetchMore}
          loading={loading}
          hasMore={hasMore}>
          {data.map((_, index) => (
            <ExampleItem key={index} index={index} />
          ))}
        </InfiniteScrollComponent>
      </div>
    </>
  );
};

export const InfiniteScroll = Template.bind({});

InfiniteScroll.args = {
  maxHeight: '500px',
} as InfiniteScrollProps;
