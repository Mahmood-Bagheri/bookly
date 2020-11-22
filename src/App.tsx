import React, { Suspense, FunctionComponent } from "react";

// modules
import { Router } from "react-router-dom";
/* main routes */
import Routes from "routes";
// helpers
import { history } from "helpers/history";

const App: FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Routes />
            </Router>
        </React.Fragment>
    );
};

export default App;
