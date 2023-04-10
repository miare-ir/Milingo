import * as React from 'react';
import './styles/index.scss';
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    title: string;
    count?: number;
    description?: string;
    isActive?: boolean;
    isClose?: boolean;
    setIsClose?: () => void;
}
declare const Accordion: ({ children, title, count, description, isActive, isClose, setIsClose, ...rest }: AccordionProps) => JSX.Element;
export default Accordion;
