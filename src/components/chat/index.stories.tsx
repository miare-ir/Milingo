import * as React from 'react';

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
  const footerStyle = {
    color: '#1e6dc8',
    background: '#ecedef',
    height: '40px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };

  const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);
  const renderChatFooter = (): JSX.Element => (
    <div style={footerStyle}>
      <Button
        style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
        type="button"
        link
        tiny
        onClick={() => handelResolve(1)}>
        رسیدگی شد
      </Button>
    </div>
  );

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
  const testFiles = [new File([''], 'filename.jpg')];
  const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);
  const renderChatFooter = (): JSX.Element => (
    <Button
      style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
      type="button"
      link
      tiny
      onClick={() => handelResolve(1)}>
      رسیدگی شد
    </Button>
  );

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      footer={renderChatFooter()}
      files={testFiles}>
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
  const testFiles = [new File([''], 'filename.jpg')];
  const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);
  const renderChatFooter = (): JSX.Element => (
    <Button
      style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
      type="button"
      link
      tiny
      onClick={() => handelResolve(1)}>
      رسیدگی شد
    </Button>
  );

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      footer={renderChatFooter()}
      files={testFiles}
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
  const testFiles = [new File([''], 'filename.jpg')];
  const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);
  const renderChatFooter = (): JSX.Element => (
    <Button
      style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
      type="button"
      link
      tiny
      onClick={() => handelResolve(1)}>
      رسیدگی شد
    </Button>
  );

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      footer={renderChatFooter()}
      files={testFiles}
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
  const testFiles = [new File([''], 'filename.jpg')];
  const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);
  const renderChatFooter = (): JSX.Element => (
    <Button
      style={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
      type="button"
      link
      tiny
      onClick={() => handelResolve(1)}>
      رسیدگی شد
    </Button>
  );

  return (
    <Chat
      id={1}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      canAttach
      footer={renderChatFooter()}
      files={testFiles}
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
