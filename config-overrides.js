const { override, addLessLoader, addWebpackPlugin } = require("customize-cra");
const WebpackBar = require("webpackbar");

const lessLoaders = addLessLoader({
    lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
            "@primary-color": "#000",
            "@select-item-selected-bg": "#dedede",
        },
    },
});

const WebpackPlugins = addWebpackPlugin(
    new WebpackBar({
        color: "#eb34c6",
    })
);

module.exports = override(lessLoaders, WebpackPlugins);
