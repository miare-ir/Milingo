import * as React from 'react';

import Chat from '../chat';
import Accordion from './accordion';
import ListAccordion from './list-accordion';
import AccordionItem from './accordion-item';

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
  const [isClose, setIsClose] = React.useState(false);

  return (
    <Accordion
      title={'تیتر'}
      isClose={isClose}
      setIsClose={() => setIsClose(!isClose)}>
      <p style={{ padding: '16px' }}>پیامی چیزی...</p>
    </Accordion>
  );
};

export const ListsAccordion = (): JSX.Element => {
  const listItems = [
    {
      id: 0,
      title: 'تایتل 0',
      description: 'توضیحات 0',
      element: <Chat style={{ height: '350px' }} id={0}></Chat>,
    },
    {
      id: 1,
      title: 'تایتل 1',
      description: 'توضیحات 1',
      element: <Chat style={{ height: '350px' }} id={0}></Chat>,
    },
    {
      id: 2,
      title: 'تایتل 2',
      description: 'توضیحات 2',
      element: <Chat style={{ height: '350px' }} id={0}></Chat>,
    },
  ];

  const accordionItems = listItems.map(listItem => ({
    id: listItem.id,
    element: (
      <AccordionItem
        key={listItem.id}
        id={listItem.id}
        title={listItem.title}
        description={listItem.description}
      />
    ),
  }));

  return (
    <ListAccordion
      accordionTitle={'لیست ایشیو ها'}
      listItems={listItems}
      accordionItems={accordionItems}
    />
  );
};
