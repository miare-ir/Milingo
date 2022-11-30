import * as React from 'react';

import * as classNames from 'classnames';

import Accordion from './accordion';
import './styles/index.scss';

export interface ListAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  accordionTitle: string;
  maxOpenAccordion?: number;
  children: JSX.Element[];
  listItems: JSX.Element[];
}

const ListAccordion = ({
  accordionTitle,
  maxOpenAccordion,
  listItems,
  children,
  ...rest
}: ListAccordionProps): JSX.Element => {
  const MAX_OPEN_ACCORDIONS_COUNT = maxOpenAccordion || 3;
  const [selectedIds, setSelectedIds] = React.useState(new Set<number>());

  const componentClassNames = classNames('list-accordion', rest.className);

  const handleItemSelect = (itemId: number): void => {
    if (
      selectedIds.size >= MAX_OPEN_ACCORDIONS_COUNT &&
      !selectedIds.has(itemId)
    ) {
      return setSelectedIds(
        previousSelectedIds =>
          new Set([
            itemId,
            ...Array.from(previousSelectedIds.values()).slice(1),
          ]),
      );
    }

    return setSelectedIds(previousSelectedIds =>
      new Set(previousSelectedIds).add(itemId),
    );
  };

  const handleItemUnselect = (itemId: number): void =>
    setSelectedIds(previousselectedIds => {
      const clone = new Set(Array.from(previousselectedIds));
      clone.delete(itemId);
      return clone;
    });

  const renderlistItems = (): JSX.Element[] =>
    Array.from(selectedIds).map(selectedId => {
      const item = listItems.find(listitem => listitem.props.id === selectedId);
      return (
        <Accordion
          style={{ bottom: '0' }}
          key={selectedId}
          title={`${item.props.title}`}
          description={`${item.props.about}`}
          isActive
          setIsClose={() => {
            handleItemUnselect(selectedId);
          }}>
          {item}
        </Accordion>
      );
    });

  return (
    <div {...rest} className={componentClassNames}>
      <Accordion
        className="main-accordion"
        title={accordionTitle}
        count={listItems.length}>
        {children.map(child => (
          <div
            className="accordion-item-container"
            key={child.props.id}
            onClick={() => handleItemSelect(child.props.id)}>
            {child}
          </div>
        ))}
      </Accordion>
      <div className="items-container">{renderlistItems()}</div>
    </div>
  );
};

export default ListAccordion;
