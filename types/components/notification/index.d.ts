import * as React from 'react';
import './styles.scss';
export interface NotificationProps extends React.HTMLProps<HTMLDivElement> {
    message: string;
    warning?: boolean;
    className?: string;
}
declare const Notification: React.SFC<NotificationProps>;
export default Notification;
