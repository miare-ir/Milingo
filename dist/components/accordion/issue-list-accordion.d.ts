import * as React from 'react';
import Issue from '../../common/types/issue';
import './styles/index.scss';
export interface IssueListAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    accordionTitle: string;
    issues: Issue[];
    handelSubmitMessage: (id: number, message: string) => void;
    handelResolve: (id: number) => void;
    maxOpenChat?: number;
}
declare const IssueListAccordion: ({ accordionTitle, issues, handelSubmitMessage, handelResolve, maxOpenChat, ...rest }: IssueListAccordionProps) => JSX.Element;
export default IssueListAccordion;
