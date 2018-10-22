const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
    // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    storybookBaseConfig.module.rules.push({
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
            presets: ["react", "env"],
            plugins: [
                ["emotion", { sourceMap: true, autoLabel: true }],
                "transform-class-properties",
                "transform-object-rest-spread"
            ]
        }
    });

    // Return the altered config
    return storybookBaseConfig;
};
