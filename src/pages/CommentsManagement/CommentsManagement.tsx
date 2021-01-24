import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { CommentManagementTable } from "components/CommentManagementTable";
/* modules */
import { useComments } from "hooks";

const CommentsManagement: FC = () => {
    const { data: comments, isLoading: loading } = useComments();
    return (
        <Fragment>
            <DocumentTitle title="CommentsManagement" />
            <CommentManagementTable comments={comments} />
        </Fragment>
    );
};

export default CommentsManagement;
