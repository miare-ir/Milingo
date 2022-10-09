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
  isOpen?: boolean;
  setIsOpen: () => void;
  onSubmitMessage?: (id: number, text: string) => void;
  isSendingMessage?: boolean;
  canSubmitMessage?: boolean;
  hasHeader?: boolean;
  isResolved?: boolean;
  resolveBtnTitle?: string;
  resolve?: (id: number) => void;
  children?: React.ReactNode;
}

const Chat = ({
  title,
  id,
  username,
  reporter_type,
  className,
  isOpen,
  setIsOpen,
  onSubmitMessage,
  isSendingMessage,
  canSubmitMessage,
  hasHeader,
  isResolved,
  resolveBtnTitle,
  resolve,
  children,
}: ChatProps): JSX.Element => {
  const [toggle, setToggle] = React.useState(true);

  const componentClassNames = classNames(
    'chat-container',
    isOpen ? 'open' : '',
    toggle ? 'active' : '',
    className,
  );

  return (
    <div className={componentClassNames}>
      {hasHeader && (
        <div
          className={`chat-header ${reporter_type}-issue`}
          onClick={() => setToggle(currentToggle => !currentToggle)}>
          <div className="chat-info">
            <div className="chat-title">{title}</div>
            <div className="chat-username">{username}</div>
          </div>
          <img src={closeIcon} onClick={setIsOpen} />
        </div>
      )}
      <div className={'chat-content'}>{children}</div>
      {canSubmitMessage && (
        <SubmitForm
          id={id}
          isSending={isSendingMessage}
          onSubmit={onSubmitMessage}
          resolveBtnTitle={resolveBtnTitle}
          isResolved={isResolved}
          resolve={resolve}
        />
      )}
    </div>
  );
};

export default Chat;
