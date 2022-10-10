import * as React from 'react';

import * as classNames from 'classnames';

import Issue from '../../common/types/issue';
import Chat from '../chat';
import Message from '../chat/message';
import Accordion from './accordion';
import ListItem from './list-item';
import './styles.scss';

export interface IssueListAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  accordionTitle: string;
  issues: Issue[];
  handelSubmitMessage: (id: number, message: string) => void;
  handelResolve: (id: number) => void;
  maxOpenChat?: number;
}

const IssueListAccordion = ({
  accordionTitle,
  issues,
  handelSubmitMessage,
  handelResolve,
  maxOpenChat,
  ...rest
}: IssueListAccordionProps): JSX.Element => {
  const MAX_OPEN_CHATS_COUNT = maxOpenChat || 3;
  const [selectedChatIds, setSelectedChatIds] = React.useState(
    new Set<number>(),
  );

  const componentClassNames = classNames('chat-list-accordion', rest.className);

  const handleChatSelect = (chatId: number): void => {
    if (
      selectedChatIds.size >= MAX_OPEN_CHATS_COUNT &&
      !selectedChatIds.has(chatId)
    ) {
      return setSelectedChatIds(
        previousSelectedChats =>
          new Set([
            chatId,
            ...Array.from(previousSelectedChats.values()).slice(1),
          ]),
      );
    }

    return setSelectedChatIds(previousSelectedChats =>
      new Set(previousSelectedChats).add(chatId),
    );
  };

  const handleChatUnselect = (chatId: number): void =>
    setSelectedChatIds(previousSelectedChatIds => {
      const clone = new Set(Array.from(previousSelectedChatIds));
      clone.delete(chatId);
      return clone;
    });

  const renderChats = (): JSX.Element[] =>
    Array.from(selectedChatIds).map(selectedChatId => {
      const issue = issues[selectedChatId];
      return (
        <Chat
          key={selectedChatId}
          chatId={selectedChatId}
          title={issue.problem.title}
          reporter_type={issue.reporter_type}
          username={
            issue.reported_by.first_name + ' ' + issue.reported_by.last_name
          }
          isOpen
          resolveBtnTitle={'رسیدگی شد'}
          setIsOpen={() => handleChatUnselect(issue.id)}
          onSubmitMessage={handelSubmitMessage}
          isSendingMessage={false}
          canSubmitMessage
          hasHeader
          isResolved={false}
          resolve={handelResolve}>
          {issue.messages.map(({ id, message, sender_type, created_at }) => (
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
    });

  return (
    <div {...rest} className={componentClassNames}>
      <Accordion
        className="issue-accordion"
        title={accordionTitle}
        count={issues.length}>
        {issues.map(issue => (
          <ListItem
            className={`accordion-list-container ${issue.reporter_type}-issue`}
            key={issue.id}
            id={issue.id}
            title={issue.problem.title}
            description={issue.description}
            timer={33}
            isResolved={!!issue.resolved_at}
            reporter_type={issue.reporter_type}
            onClick={handleChatSelect}>
            <div className={'timer'}>{issue.reported_at.getMinutes()}</div>
          </ListItem>
        ))}
      </Accordion>
      <div className="chats-container">{renderChats()}</div>
    </div>
  );
};

export default IssueListAccordion;
