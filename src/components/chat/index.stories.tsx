import * as React from 'react';
import predefinedMessageIcon from '../../assets/icon/predefined-messages.svg';
import Button from '../button';
import Message from './message';
import { Chat } from '.';

export default {
  title: 'Chat',

  decorators: [
    story => <div className="story-container chat-story">{story()}</div>,
  ],
};

const handelSubmitMessage = (id: number, message: string): void =>
  alert(`پیام ${message} برای ایدی ${id} ارسال شد`);

const messages = [
  {
    id: '9ad24b31-8f1e-4c5e-b488-b715b2825792',
    created_at: '2021-11-02T14:48:18+0330',
    sender_type: 'staff',
    type: 'text',
    message: 'سلام! پشتیبان میاره هستم. ',
  },
  {
    id: '9ad24b31-8f1e-4c5e-b488-b715b2825796',
    created_at: '2021-11-02T14:49:18+0330',
    sender_type: 'client',
    type: 'text',
    message: 'علیک سلام کلاینت هستم',
  },
  {
    id: '9ad24b31-8f1e-4c5e-b488-b715b2825797',
    created_at: '2021-11-02T14:50:18+0330',
    sender_type: 'staff',
    type: 'text',
    message: 'مشکلی داری؟',
  },
  {
    id: '9ad24b31-8f1e-4c5e-b488-b715b2825790',
    created_at: '2021-11-02T15:00:18+0330',
    sender_type: 'client',
    type: 'text',
    message: 'نه مشکلی نیست',
  },
  {
    id: '9ad24b31-8f1e-4c5e-b488-b715b2825790',
    created_at: '2021-11-02T15:00:18+0330',
    sender_type: 'client',
    type: 'text',
    message: 'mia.re',
  },
];

export const Default = (): JSX.Element => (
  <Chat id={1} handelSubmit={handelSubmitMessage} isSending={false} canSubmit>
    {messages.map(({ message, id, sender_type, created_at }) => (
      <Message
        id={id}
        key={id}
        message={message}
        isRight={sender_type !== 'staff'}
        createdDate={created_at}
        timeFormat={{
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }}
      />
    ))}
  </Chat>
);

export const WithoutMessage = (): JSX.Element => (
  <Chat id={1} handelSubmit={handelSubmitMessage} isSending={false} canSubmit>
    {[].map(({ message, id, sender_type, created_at }) => (
      <Message
        id={id}
        key={id}
        message={message}
        isRight={sender_type !== 'staff'}
        createdDate={created_at}
      />
    ))}
  </Chat>
);

export const WithoutSubmitMessage = (): JSX.Element => (
  <Chat id={1} canSubmit={false}>
    {messages.map(({ message, id, sender_type, created_at }) => (
      <Message
        id={id}
        key={id}
        message={message}
        isRight={sender_type === 'staff'}
        createdDate={created_at}
      />
    ))}
  </Chat>
);

export const WithFooter = (): JSX.Element => {    
  const renderChatFooter = (): JSX.Element => 
    <Button
      type="submit"
      link
      tiny
      className="send-button">
    <img
      className="send-icon"
      src={predefinedMessageIcon}
    />
  </Button>
    
  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      footer={renderChatFooter()}>
      {messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          createdDate={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithAttachment = (): JSX.Element => {
  const testFile = new File([''], 'filename.jpg');
  const renderChatFooter = (): JSX.Element => 
    <Button
      type="submit"
      link
      tiny
      className="send-button">
    <img
      className="send-icon"
      src={predefinedMessageIcon}
    />
  </Button>

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      footer={renderChatFooter()}
      file={testFile}
      errorInvalidSize="ارور سایز"
      validFileSize={10000000}
      validFileFormat={['image/jpeg', 'image/png']}
      errorInvalidFormat="ارور فورمت">
      {messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          createdDate={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithProgressAttachment = (): JSX.Element => {
  const loadingTestState = {
    loading: true,
    progress: 70,
  };
  const testFile = new File([''], 'filename.jpg');

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      file={testFile}
      state={loadingTestState}>
      {messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          createdDate={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithErrorAttachment = (): JSX.Element => {
  const errorTestState = {
    message: 'حجم فایل شما بیش از حد مجاز است.',
  };
  const testFile = new File([''], 'filename.jpg');

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      file={testFile}
      validate={() => false}
      state={errorTestState}
      forceDisplayError>
      {messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          createdDate={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithTryAgainAttachment = (): JSX.Element => {
  const tryTestState = {
    message: 'فایل بارگذاری نشد.',
    tryAgain: true,
  };
  const testFile = new File([''], 'filename.jpg');

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      file={testFile}
      validate={() => false}
      state={tryTestState}
      forceDisplayError>
      {messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          createdDate={created_at}
        />
      ))}
    </Chat>
  );
};
