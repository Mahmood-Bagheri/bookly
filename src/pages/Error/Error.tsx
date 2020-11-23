import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";

const Error: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="Error" />
            <div
                style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <span aria-label="img" role="img" className="ml-2">
                    😑
                </span>
                <p>You are in a Wrong place</p>
                <p style={{ fontWeight: 300, fontSize: "10px" }}>
                    جای اشتباهی اومدی ...
                </p>
            </div>
        </Fragment>
    );
};

export default Error;
