import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";

// * main app component
import App from "App";

// * main style
import "assets/fonts/dana/fontiran.css";
import "assets/styles/global.scss";
import "bootstrap/dist/css/bootstrap-grid.css";

/* recoil service */
import { RecoilService } from "services/recoil/recoilService";
import { ReactQueryService } from "services/react-query/reactQueryService";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

interface Props {
    Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
    <React.StrictMode>
        <RecoilService>
            <ReactQueryService>
                <Component />
            </ReactQueryService>
        </RecoilService>
    </React.StrictMode>
);

const render = (Component: typeof App) => {
    ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);
reportWebVitals();
