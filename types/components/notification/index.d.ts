import * as React from 'react';
import './styles.scss';
export interface NotificationProps {
    message: string;
    warning?: boolean;
    className?: string;
}
declare const Notification: React.SFC<NotificationProps>;
export default Notification;
