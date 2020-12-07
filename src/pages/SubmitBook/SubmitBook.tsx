import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { SubmitBookForm } from "components/SubmitBookForm";

const SubmitBook: FC = () => {
    return (
        <Fragment>
            <DocumentTitle title="SubmitBook" />
            <SubmitBookForm onSubmit={v => console.log(v)} />
        </Fragment>
    );
};

export default SubmitBook;
