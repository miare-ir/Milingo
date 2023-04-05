import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface NotificationProps extends React.HTMLProps<HTMLDivElement> {
  message: string;
  warning?: boolean;
  className?: string;
}

const Notification: React.FC<NotificationProps> = (
  props: NotificationProps,
) => {
  const { message, className, warning, ...restOfProps } = props;
  const componentClassName = classNames('notification', className, {
    alarm: warning === true,
  });

  return (
    <div className={componentClassName} {...restOfProps}>
      {message}
    </div>
  );
};

export default Notification;
