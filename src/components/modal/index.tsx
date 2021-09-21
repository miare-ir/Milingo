import * as React from 'react';
import { useEffect } from 'react';

import './styles.scss';

export interface ModalProps {
  onClose?: () => void;
  isOpen: boolean;
  align?: 'start' | 'end';
  className?: string;
  children: JSX.Element;
}

const Modal = (props: ModalProps): JSX.Element => {
  if (!props.isOpen) {
    return null;
  }

  const closeOnEscapeKeyDown = (event: {
    charCode: number;
    keyCode: number;
  }): void => {
    if ((event.charCode || event.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    if (props.onClose) {
      document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    }

    return function cleanup() {
      if (props.onClose) {
        document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
      }
    };
  }, []);

  const handleClose = (): void => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div
      className={`milingo-modal--overlay ${props.isOpen ? 'isOpen' : ''}`}
      onClick={handleClose}>
      <div
        className={`modal modal-content ${props.align} ${props.className}`}
        onClick={event => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
