import * as React from 'react';

import * as classNames from 'classnames';

import './styles.scss';
import SubmitForm from './submit-form';

export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  chatId: number;
  onSubmitMessage?: (id: number, text: string) => void;
  isSendingMessage?: boolean;
  canSubmitMessage?: boolean;
  children?: React.ReactNode;
  chatFooter?: React.ReactNode;
}

const Chat = ({
  chatId,
  onSubmitMessage,
  isSendingMessage,
  canSubmitMessage,
  children,
  chatFooter,
  ...rest
}: ChatProps): JSX.Element => {
  const componentClassNames = classNames('chat-container', rest.className);

  return (
    <div {...rest} className={componentClassNames}>
      <div className="chat-content">{children}</div>
      {canSubmitMessage && (
        <SubmitForm
          id={chatId}
          isSending={isSendingMessage}
          onSubmit={onSubmitMessage}
        />
      )}
      <div className="chat-footer">{chatFooter}</div>
    </div>
  );
};

export default Chat;
