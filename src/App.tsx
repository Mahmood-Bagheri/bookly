import React, { FunctionComponent } from "react";
/* components */
import { Container } from "components/Container";
// modules
import { Router } from "react-router-dom";
/* main routes */
import Routes from "routes";
// helpers
import { history } from "helpers/history";
import { Col } from "components/Col";
import { Row } from "components/Row";
import { UserLayout } from "components/UserLayout";

const App: FunctionComponent = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Container>
                    <Row>
                        <Col lg={3} className="d-flex">
                            <UserLayout />
                        </Col>
                        <Col lg={9}>
                            <Routes />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </React.Fragment>
    );
};

export default App;
