import * as React from 'react';

import './styles.scss';

/**
 * @onEnd when it reaches the end, it will run automatically
 * @children child component
 * @loadingMessage will be shown when new data are fetching
 * @endMessage will be shown when there are no more data to fetch
 * @loading pass true when new data are loading
 * @hasMore specifies whether there are more items to display
 * @maxHeight maximum allowed height
 * @rest all `HTMLDivElement` attributes
 */
export interface InfiniteScrollProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onEnd?: () => void | Promise<void>;
  children?: React.ReactNode;
  loadingMessage?: string;
  endMessage?: string;
  loading?: boolean;
  hasMore?: boolean;
  maxHeight?: string;
  scrollableProps?: React.HTMLAttributes<HTMLDivElement>;
  infoProps?: React.HTMLAttributes<HTMLDivElement>;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  onEnd,
  children,
  hasMore,
  loadingMessage = 'در حال دریافت ...',
  endMessage = 'پایان لیست 😊',
  maxHeight = '100%',
  loading,
  scrollableProps,
  infoProps,
  ...rest
}: InfiniteScrollProps): JSX.Element => {
  const onScroll = React.useCallback(
    (evt: React.UIEvent<HTMLDivElement, UIEvent>) => {
      if (!hasMore) {
        return;
      }

      const target = evt.target as HTMLDivElement;
      const { scrollTop, scrollHeight, clientHeight } = target;
      const isAtTheBottom = scrollHeight - scrollTop <= clientHeight;

      if (isAtTheBottom) {
        onEnd?.();
      }
    },
    [hasMore],
  );

  return (
    <>
      <div
        {...rest}
        className={`infinite-scroll ${rest.className ? rest.className : ''}`}
        style={{ maxHeight }}>
        <div
          {...scrollableProps}
          className={`infinite-scroll-children ${
            scrollableProps?.className ? scrollableProps.className : ''
          }`}
          onScroll={onScroll}>
          {children}
        </div>

        <div
          {...infoProps}
          className={`infinite-scroll-info ${
            infoProps?.className ? infoProps.className : ''
          }`}>
          {loading ? loadingMessage : hasMore ? '' : endMessage}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
