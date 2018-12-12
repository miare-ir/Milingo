import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface NotificationProps {
  message: string;
  warning?: boolean;
  className?: string;
}

const Notification: React.SFC<NotificationProps> = (
  props: NotificationProps,
) => {
  const className = classNames('notification', props.className, {
    alarm: props.warning === true,
  });

  return <div className={className}>{props.message}</div>;
};

export default Notification;
