import * as React from 'react';
import './styles/index.scss';
interface ListItems {
    id: number;
    title: string;
    description: string;
    element: JSX.Element;
}
interface AccordionItems {
    id: number;
    element: JSX.Element;
    isDisable?: boolean;
}
export interface ListAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    accordionTitle: string;
    maxOpenAccordion?: number;
    accordionItems: AccordionItems[];
    listItems: ListItems[];
}
declare const ListAccordion: ({ accordionTitle, maxOpenAccordion, listItems, accordionItems, ...rest }: ListAccordionProps) => JSX.Element;
export default ListAccordion;
