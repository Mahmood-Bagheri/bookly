import React, { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";

/* route constants */
import __ROUTES__ from "constants/routes";

const Main: FunctionComponent = () => {
    return <Redirect to={__ROUTES__.app} />;
};

export default Main;
