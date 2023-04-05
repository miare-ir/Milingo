import * as React from 'react';
import './styles.scss';
export interface ChatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
    id: number;
    handelSubmit?: (id: number, text: string) => void;
    isSending?: boolean;
    canSubmit?: boolean;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Chat: ({ id, handelSubmit, isSending, canSubmit, children, footer, ...rest }: ChatProps) => JSX.Element;
export default Chat;
