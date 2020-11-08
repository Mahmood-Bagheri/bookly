import React from "react";
import { loadable } from "helpers/loadable";
import { LoadingIndicator } from "components/LoadingIndicator";

export default loadable(() => import("./Home"), {
    fallback: <LoadingIndicator />,
});
