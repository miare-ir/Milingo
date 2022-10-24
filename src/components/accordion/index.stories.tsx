import * as React from 'react';

import issues from '../../common/fixtures/issue';
import Accordion from './accordion';
import IssueListAccordion from './issue-list-accordion';

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

export const WithCloseButton = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Accordion
      title={'تیتر'}
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}>
      <p style={{ padding: '16px' }}>پیامی چیزی...</p>
    </Accordion>
  );
};

export const IssuesListAccordion = (): JSX.Element => {
  const handelSubmitMessage = (id: number, message: string): void =>
    alert(`پیام ${message} برای ایدی ${id} ارسال شد`);

  const handelResolve = (id: number): void => alert(`ایشیو ${id} بسته شد`);

  return (
    <IssueListAccordion
      accordionTitle={'لیست ایشیو ها'}
      issues={issues}
      handelResolve={handelResolve}
      handelSubmitMessage={handelSubmitMessage}
    />
  );
};
