import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { UsersTable } from "components/UsersTable";

const Users: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="کاربران" />
            <UsersTable />
        </Fragment>
    );
};

export default Users;
