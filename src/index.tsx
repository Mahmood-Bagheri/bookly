import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";

// * main app component
import App from "App";

// * main style
import "assets/styles/main.css";
import "assets/fonts/dana/fontiran.css";

/* recoil service */
import { RecoilService } from "services/recoil/recoilService";
import { ReactQueryService } from "services/react-query/reactQueryService";
import { ThemeService } from "services/theme/themeService";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

interface Props {
    Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
    <React.StrictMode>
        <RecoilService>
            <ReactQueryService>
                <ThemeService>
                    <Component />
                </ThemeService>
            </ReactQueryService>
        </RecoilService>
    </React.StrictMode>
);

const render = (Component: typeof App) => {
    ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);
reportWebVitals();
