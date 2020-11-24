const { override, addLessLoader, addWebpackPlugin } = require("customize-cra");
const WebpackBar = require("webpackbar");
module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#000" },
        },
    }),
    addWebpackPlugin(
        new WebpackBar({
            color: "#eb34c6",
        })
    )
);
