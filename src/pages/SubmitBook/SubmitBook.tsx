import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { SubmitBookForm } from "components/SubmitBookForm";
import { useSubmitBook } from "hooks";
import { transformObjectToFormData } from "helpers/transformObjectToFormData";

const SubmitBook: FC = () => {
    const [submitBook, { isLoading }] = useSubmitBook();
    return (
        <Fragment>
            <DocumentTitle title="SubmitBook" />
            <SubmitBookForm loading={isLoading} onSubmit={submitBook} />
        </Fragment>
    );
};

export default SubmitBook;
