import React, { FunctionComponent } from 'react';
/* components */
import { Container } from 'components/Container';
// modules
import { Router } from 'react-router-dom';
/* main routes */
import Routes from 'routes';
// helpers
import { history } from 'helpers/history';

const App: FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Container>
                    <Routes />
                </Container>
            </Router>
        </React.Fragment>
    );
};

export default App;
