import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";

import App from "App";

import relativeTime from "dayjs/plugin/relativeTime";
import dayJs from "dayjs";

import "assets/fonts/dana/fontiran.css";
import "antd/dist/antd.css";
import "assets/styles/global.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "dayjs/locale/fa";
import "swiper/swiper.scss";

import { RecoilService } from "services/recoil/recoilService";
import { ReactQueryService } from "services/react-query/reactQueryService";
import { ConfigProvider } from "antd";

dayJs.extend(relativeTime);
dayJs.locale("fa");

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

interface Props {
    Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
    <React.StrictMode>
        <RecoilService>
            <ReactQueryService>
                <ConfigProvider direction="rtl">
                    <Component />
                </ConfigProvider>
            </ReactQueryService>
        </RecoilService>
    </React.StrictMode>
);

const render = (Component: typeof App) => {
    ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);
reportWebVitals();
