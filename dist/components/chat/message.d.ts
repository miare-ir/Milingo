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
declare const Message: (props: MessageProps) => JSX.Element;
export default Message;
