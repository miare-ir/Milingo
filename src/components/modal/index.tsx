import * as React from 'react';

import './styles.scss';
import { useEffect } from 'react';

export interface ModalProps {
  onClose: () => void;
  show: boolean;
  align?: 'start' | 'center' | 'end';
  children: JSX.Element;
}

const Modal = (props: ModalProps): JSX.Element => {
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
      className={`milingo-modal--overlay ${props.show ? 'show' : ''}`}
      onClick={props.onClose}
      style={props.show ? { display: 'flex' } : {}}>
      <div
        className={`modal-content ${props.align || 'center'}`}
        onClick={event => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
