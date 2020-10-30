import NProgress, { NProgressOptions } from "nprogress";
import "nprogress/nprogress.css";

const NprogressConfig: Partial<NProgressOptions> = {
    showSpinner: true,
};

NProgress.configure(NprogressConfig);
export { NProgress };
