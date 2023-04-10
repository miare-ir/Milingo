import './styles.scss';
export interface ModalProps {
    onClose?: () => void;
    isOpen: boolean;
    align?: 'start' | 'end';
    className?: string;
    overlayClassName?: string;
    children: JSX.Element;
}
declare const Modal: (props: ModalProps) => JSX.Element;
export default Modal;
