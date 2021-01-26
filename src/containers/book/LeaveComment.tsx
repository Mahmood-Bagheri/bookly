import React from 'react';
import { CommentInputBox } from 'components/Comment';
import { useCreateComment } from 'hooks';
import { useParams } from 'react-router-dom';
import { AclService } from 'services/rbac';
import { FormInstance } from 'antd/lib/form';

export const LeaveCommentContainer = () => {
    const { bookId } = useParams<Book.Id>();

    /* initiating operations hooks */
    const [
        createComment,
        { isLoading: createCommentLoading },
    ] = useCreateComment();

    const handleSubmitComment = (body: string, form: FormInstance) => {
        /* create comment api call */
        createComment(
            { book: bookId, body },
            {
                onSuccess: () => {
                    /* reset fields after successful api call */
                    form.resetFields();
                },
            }
        );
    };

    return (
        <AclService permission='comments.create'>
            <CommentInputBox
                loading={createCommentLoading}
                onSubmit={handleSubmitComment}
            />
        </AclService>
    );
};
