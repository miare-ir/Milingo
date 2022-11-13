import * as React from 'react';

import * as classNames from 'classnames';

import './styles.scss';
import SubmitForm from './submit-form';

export interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  chatId: number;
  handelSubmit?: (id: number, text: string) => void;
  isSending?: boolean;
  canSubmit?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Chat = ({
  chatId,
  handelSubmit,
  isSending,
  canSubmit,
  children,
  footer,
  ...rest
}: ChatProps): JSX.Element => {
  const componentClassNames = classNames('chat-container', rest.className);

  return (
    <div {...rest} className={componentClassNames}>
      <div className="chat-content">{children}</div>
      {canSubmit && (
        <SubmitForm id={chatId} isSending={isSending} onSubmit={handelSubmit} />
      )}
      <div className="chat-footer">{footer}</div>
    </div>
  );
};

export default Chat;
