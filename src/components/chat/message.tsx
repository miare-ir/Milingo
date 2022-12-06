import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface MessageProps {
  message: string;
  isRight?: boolean;
  createdDate: string;
  id: string;
  className?: string;
}

const Message = (props: MessageProps): JSX.Element => {
  const dateTimeFormat = (dateTime: string): string =>
    new Intl.DateTimeFormat('fa', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateTime));

  const componentClassNames = classNames(
    'chat-message-container',
    props.isRight ? 'right' : 'left',
    props.className,
  );

  return (
    <div className={componentClassNames} key={props.id}>
      <div className="chat-message-item">
        <p className="message-content">{props.message}</p>
      </div>
      <span className="time">{dateTimeFormat(props.createdDate)}</span>
    </div>
  );
};

export default Message;