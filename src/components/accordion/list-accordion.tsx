import * as React from 'react';

import * as classNames from 'classnames';

import Accordion from './accordion';
import './styles/index.scss';

interface ListItems {
  id: number;
  title: string;
  description: string;
  item: JSX.Element;
}

export interface ListAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  accordionTitle: string;
  maxOpenAccordion?: number;
  children: JSX.Element[];
  listItems: ListItems[];
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

  const handleItemSelect = (itemId: number) => (): void => {
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

  const handleItemUnselect = (itemId: number) => (): void =>
    setSelectedIds(previousSelectedIds => {
      const clone = new Set(Array.from(previousSelectedIds));
      clone.delete(itemId);
      return clone;
    });

  const renderListItems = (): JSX.Element[] =>
    Array.from(selectedIds).map(selectedId => {
      const Listitem = listItems.find(listitem => listitem.id === selectedId);
      return (
        <Accordion
          key={selectedId}
          title={Listitem.title}
          description={Listitem.description}
          isActive
          setIsClose={handleItemUnselect(selectedId)}>
          {Listitem.item}
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
            onClick={handleItemSelect(child.props.id)}>
            {child}
          </div>
        ))}
      </Accordion>
      <div className="items-container">{renderListItems()}</div>
    </div>
  );
};

export default ListAccordion;
