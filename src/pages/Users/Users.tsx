import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { UsersTable } from "components/UsersTable";
import { useDeleteUser } from "services/api/operations";

const Users: FC = props => {
    const [deleteUser] = useDeleteUser();

    return (
        <Fragment>
            <DocumentTitle title="کاربران" />
            <UsersTable onDeleteUser={deleteUser} />
        </Fragment>
    );
};

export default Users;
