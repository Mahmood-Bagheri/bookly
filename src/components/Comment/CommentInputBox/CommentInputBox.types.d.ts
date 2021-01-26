import { FormInstance } from 'antd/lib/form';

export type CommentInputBoxProps = {
    onSubmit: (comment: string, form: FormInstance) => void;
    loading?: boolean;
};
