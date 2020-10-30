const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./src/services/theme/tailwind.config.js"),
        require("autoprefixer"),
    ],
};
