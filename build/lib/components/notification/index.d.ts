import * as React from 'react';
import './styles.scss';
export interface NotificationProps {
    message: string;
    warning?: boolean;
}
declare const Notification: React.SFC<NotificationProps>;
export default Notification;
