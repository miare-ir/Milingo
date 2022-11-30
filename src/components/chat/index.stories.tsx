import * as React from 'react';

import issues from '../../common/fixtures/issue';
import Button from '../button';
import Message from './message';
import Chat from '.';

export default {
  title: 'Chat',

  decorators: [
    story => <div className="story-container chat-story">{story()}</div>,
  ],
};

const issue = issues[0];
const handelSubmitMessage = (id: number, message: string): void =>
  alert(`پیام ${message} برای ایدی ${id} ارسال شد`);

export const Default = (): JSX.Element => (
  <Chat
    id={issue.id}
    handelSubmit={handelSubmitMessage}
    isSending={false}
    canSubmit>
    {issue.messages.map(({ message, id, sender_type, created_at }) => (
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
  <Chat
    id={issue.id}
    handelSubmit={handelSubmitMessage}
    isSending={false}
    canSubmit>
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
  <Chat id={issue.id} canSubmit={false}>
    {issue.messages.map(({ message, id, sender_type, created_at }) => (
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

export const WhitFooter = (): JSX.Element => {
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
        style={{ backgroundColor: 'transparent' }}
        type="button"
        link
        tiny
        onClick={() => handelResolve(issue.id)}>
        رسیدگی شد
      </Button>
    </div>
  );

  return (
    <Chat
      id={issue.id}
      handelSubmit={handelSubmitMessage}
      isSending={false}
      canSubmit
      footer={renderChatFooter()}>
      {issue.messages.map(({ message, id, sender_type, created_at }) => (
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
