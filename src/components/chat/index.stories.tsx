import * as React from 'react';

import issues from '../../common/fixtures/issue';
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

const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);

export const Default = (): JSX.Element => (
  <Chat
    chatId={issue.id}
    resolveBtnTitle={'رسیدگی شد'}
    onSubmitMessage={handelSubmitMessage}
    isSendingMessage={false}
    canSubmitMessage
    isResolved={false}
    resolve={handelResolve}>
    {issue.messages.map(({ message, id, sender_type, created_at }) => (
      <Message
        id={id}
        key={id}
        message={message}
        isRight={sender_type !== 'staff'}
        created_at={created_at}
      />
    ))}
  </Chat>
);

export const WithoutMessage = (): JSX.Element => (
  <Chat
    chatId={issue.id}
    resolveBtnTitle={'رسیدگی شد'}
    onSubmitMessage={handelSubmitMessage}
    isSendingMessage={false}
    canSubmitMessage
    isResolved={false}
    resolve={handelResolve}>
    {[].map(({ message, id, sender_type, created_at }) => (
      <Message
        id={id}
        key={id}
        message={message}
        isRight={sender_type !== 'staff'}
        created_at={created_at}
      />
    ))}
  </Chat>
);

export const WithoutSubmitMessage = (): JSX.Element => (
  <Chat chatId={issue.id} canSubmitMessage={false} isResolved={false}>
    {issue.messages.map(({ message, id, sender_type, created_at }) => (
      <Message
        id={id}
        key={id}
        message={message}
        isRight={sender_type === 'staff'}
        created_at={created_at}
      />
    ))}
  </Chat>
);
