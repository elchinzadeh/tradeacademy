const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#000000",
                            "@info-color": "#34ebe8",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
