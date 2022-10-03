import * as React from 'react';
import * as classNames from 'classnames';

import closeIcon from '../../assets/icon/close.svg';
import sendIcon from '../../assets/icon/send.svg';
import disabledSendIcon from '../../assets/icon/disabledsend.svg';
import Button from '../button';
import Textarea from '../textarea';
import Loader from '../loader';
import './styles.scss';

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
}

const Messages = (props: MessagesProps): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const isSendButtonDisabled = !message || props.isSendingMessage;

  const componentClassNames = classNames(
    'messages-container',
    `${props.isOpen ? 'open' : ''}`,
    props.className,
  );

  const handleSubmitMessage = (
    event?: React.FormEvent<HTMLFormElement>,
  ): void => {
    event?.preventDefault();
    if (!isSendButtonDisabled) {
      props.onSubmitMessage?.(props.id, message.trim());
    }
  };

  const handleTextareaKeyDowns = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    if (event.ctrlKey && event.key === 'Enter') {
      handleSubmitMessage();
    }
  };

  const handleTextareaChanges = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setMessage(event.target.value);
  };

  const renderSubmitMessage = (): JSX.Element => (
    <form onSubmit={handleSubmitMessage} className="submit-form">
      <Textarea
        rows={1}
        disabled={props?.isSendingMessage}
        value={message}
        placeholder="پیام خود را وارد کنید"
        onChange={handleTextareaChanges}
        onKeyDown={handleTextareaKeyDowns}
      />
      <div className="messages-footer">
        <Button
          type="submit"
          link
          tiny
          disabled={isSendButtonDisabled}
          className="send-button">
          {props?.isSendingMessage ? <Loader /> : 'ارسال'}
          <img src={isSendButtonDisabled ? disabledSendIcon : sendIcon} />
        </Button>
        {!props?.isResolved && (
          <Button
            type="submit"
            link
            tiny
            disabled={props?.isSendingMessage}
            className="resolve-button">
            {props?.isSendingMessage ? <Loader /> : props?.resolveBtnTitle}
          </Button>
        )}
      </div>
    </form>
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
      {props.canSubmitMessage && renderSubmitMessage()}
    </div>
  );
};

export default Messages;
