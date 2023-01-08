import './styles.scss';
export interface SubmitFormProps {
    id: number;
    isSending?: boolean;
    onSubmit: (id: number, message: string) => void;
}
declare const SubmitForm: ({ id, isSending, onSubmit, }: SubmitFormProps) => JSX.Element;
export default SubmitForm;
