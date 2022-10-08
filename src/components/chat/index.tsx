import * as React from 'react';
import * as classNames from 'classnames';

import closeIcon from '../../assets/icon/close.svg';
import './styles.scss';
import SubmitForm from './submit-form';

export interface ChatProps {
  title?: string;
  id: number;
  username?: string;
  reporter_type?: string;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
  onSubmitMessage?: (id: number, text: string) => void;
  isSendingMessage?: boolean;
  canSubmitMessage?: boolean;
  hasHeader?: boolean;
  isResolved?: boolean;
  resolveBtnTitle?: string;
  resolve?: (id: number) => void;
  children: JSX.Element[] | JSX.Element;
}

const Chat = (props: ChatProps): JSX.Element => {
  const [toggle, setToggle] = React.useState(true);

  const componentClassNames = classNames(
    'chat-container',
    props.isOpen ? 'open' : '',
    toggle ? 'active' : '',
    props.className,
  );

  return (
    <div className={componentClassNames}>
      {props.hasHeader && (
        <div
          className={`chat-header ${props.reporter_type}-issue`}
          onClick={() => setToggle(!toggle)}>
          <div className="chat-info">
            <div className="chat-title">{props.title}</div>
            <div className="chat-username">{props.username}</div>
          </div>
          <img src={closeIcon} onClick={props.setIsOpen} />
        </div>
      )}
      <div className={'chat-content'}>{props.children}</div>
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

export default Chat;
