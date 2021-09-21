import * as React from 'react';
import { useEffect } from 'react';

import './styles.scss';

export interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  align?: 'start' | 'end';
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
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className={`milingo-modal--overlay ${props.isOpen ? 'isOpen' : ''}`}
      onClick={props.onClose}>
      <div
        className={`modal-content ${props.align}`}
        onClick={event => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
