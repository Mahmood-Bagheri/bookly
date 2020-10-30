// babel-plugin-macros.config.js
module.exports = {
    twin: {
        config: "./src/services/theme/tailwind.config.js",
        preset: "styled-components",
        autoCssProp: true,
        debugProp: true,
        debugPlugins: false,
        debug: false,
    },
};
