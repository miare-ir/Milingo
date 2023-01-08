import './styles/index.scss';
export interface AccordionItemProps {
    title: string;
    id: number;
    description?: string;
    className?: string;
    onClick: (id: number) => void;
    extraElement?: JSX.Element;
}
declare const AccordionItem: (props: AccordionItemProps) => JSX.Element;
export default AccordionItem;
