import NProgress, {
    NProgressOptions,
    NProgress as NProgressInstanceInterface,
} from "nprogress";

import "nprogress/nprogress.css";

const applyNprogressConfig = (
    NProgressInstance: NProgressInstanceInterface
) => {
    const NprogressConfig: Partial<NProgressOptions> = {
        showSpinner: false,
    };
    NProgressInstance.configure(NprogressConfig);
};

applyNprogressConfig(NProgress);

export { NProgress };
