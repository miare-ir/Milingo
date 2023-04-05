import './styles.scss';
export interface MessageProps {
    message: string;
    isRight?: boolean;
    createdDate: string;
    id: string;
    className?: string;
}
declare const Message: (props: MessageProps) => JSX.Element;
export default Message;
