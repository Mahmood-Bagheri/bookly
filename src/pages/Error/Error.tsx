import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";

const Error: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="Error" />
            <div>
                <span aria-label="img" role="img">
                    😑
                </span>
                Wrong place
            </div>
        </Fragment>
    );
};

export default Error;
