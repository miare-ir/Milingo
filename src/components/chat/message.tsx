import * as React from 'react';
import * as classNames from 'classnames';
import Linkify from 'react-linkify';

import Image from '../image';
import './styles.scss';

export interface MessageProps {
  message: string;
  isRight?: boolean;
  isImage?: boolean;
  createdDate: string;
  id: string;
  className?: string;
  timeFormat?: Intl.DateTimeFormatOptions;
}

const Message = (props: MessageProps): JSX.Element => {
  const dateTimeFormat = (dateTime: string): string => {
    if (props.timeFormat) {
      return new Intl.DateTimeFormat('fa', props.timeFormat).format(
        new Date(dateTime),
      );
    }

    return new Intl.DateTimeFormat('fa', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateTime));
  };

  const componentClassNames = classNames(
    'chat-message-container',
    props.isRight ? 'right' : 'left',
    props.className,
  );

  return (
    <div className={componentClassNames} key={props.id}>
      <div className="chat-message-item">
        {props.isImage ? (
          <Image
            src={props.message}
            alt="attached-image"
            className="attached-image"
            thumbnailInfo={{
              originalSrc: props.message,
            }}
          />
        ) : (
          <Linkify properties={{ target: '_blank' }}>
            <p className="message-content">{props.message}</p>
          </Linkify>
        )}
      </div>
      <span className="time">{dateTimeFormat(props.createdDate)}</span>
    </div>
  );
};

export default Message;
