import * as React from 'react';

import issues from '../../common/fixtures/issue';
import Messages from '../messages';
import Message from '../messages/message';
import List from './list';
import Accordion from '.';

export default {
  title: 'Accordion',

  decorators: [
    story => <div className="story-container accordion-story">{story()}</div>,
  ],
};

export const Default = (): JSX.Element => (
  <Accordion title={'تیتر'}>
    <p style={{ padding: '16px' }}>پیامی چیزی...</p>
  </Accordion>
);

export const AccordionList = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedIssueId, setSelectedIssue] = React.useState('');

  const openMessages = (id: string): void => {
    setIsOpen(true);
    setSelectedIssue(id);
  };

  const handelSubmitMessage = (id: number, message: string): void => {
    alert(`پیام ${message} برای ایدی ${id} ارسال شد`);
  };

  const handelResolve = (id: number): void => {
    alert(`ایشیو ${id} بسته شد`);
  };

  return (
    <>
      <Accordion className="issue-accordion" title={'لیست ایشیو ها'} count={3}>
        {issues.map(issue => (
          <List
            key={issue.id}
            id={issue.id}
            title={issue.problem.title}
            description={issue.description}
            timer={33}
            isResolved={!!issue.resolved_at}
            reporter_type={issue.reporter_type}
            onClick={openMessages}
          />
        ))}
      </Accordion>
      {isOpen && (
        <Messages
          id={issues[selectedIssueId].id}
          title={issues[selectedIssueId].problem.title}
          reporter_type={issues[selectedIssueId].reporter_type}
          username={
            issues[selectedIssueId].reported_by.first_name +
            ' ' +
            issues[selectedIssueId].reported_by.last_name
          }
          isOpen={isOpen}
          resolveBtnTitle={'رسیدگی شد'}
          setOpen={() => setIsOpen(!isOpen)}
          onSubmitMessage={handelSubmitMessage}
          isSendingMessage={false}
          canSubmitMessage={true}
          isResolved={false}
          resolve={handelResolve}>
          {issues[selectedIssueId].messages.map((message, index) => (
            <Message
              id={index}
              key={index}
              message={message.message}
              isRight={message.sender_type === 'staff'}
              created_at={message.created_at}
            />
          ))}
        </Messages>
      )}
    </>
  );
};
