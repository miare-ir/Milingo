import * as React from 'react';
import * as classNames from 'classnames';

import closeIcon from '../../assets/icon/close.svg';
import './styles.scss';
import SubmitForm from './submit-form';

export interface MessagesProps {
  title: string;
  id: number;
  username?: string;
  reporter_type?: string;
  children: JSX.Element[] | JSX.Element;
  className?: string;
  isOpen: boolean;
  setOpen: () => void;
  onSubmitMessage?: (id: number, text: string) => void;
  isSendingMessage?: boolean;
  canSubmitMessage?: boolean;
  isResolved?: boolean;
  resolveBtnTitle?: string;
  resolve?: (id: number) => void;
}

const Messages = (props: MessagesProps): JSX.Element => {
  const componentClassNames = classNames(
    'messages-container',
    `${props.isOpen ? 'open' : ''}`,
    props.className,
  );

  return (
    <div className={componentClassNames} data-id={props.id}>
      <div className={`messages-header ${props.reporter_type}-issue`}>
        <div className="messages-info">
          <div className="messages-title">{props.title}</div>
          <div className="messages-username">{props.username}</div>
        </div>
        <img src={closeIcon} onClick={props.setOpen} />
      </div>
      <div className={'messages-content'}>{props.children}</div>
      {props.canSubmitMessage && (
        <SubmitForm
          id={props.id}
          isSending={props.isSendingMessage}
          onSubmit={props.onSubmitMessage}
          resolveBtnTitle={props.resolveBtnTitle}
          isResolved={props.isResolved}
          resolve={props.resolve}
        />
      )}
    </div>
  );
};

export default Messages;
