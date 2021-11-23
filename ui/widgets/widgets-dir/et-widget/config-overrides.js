const appPackageJson = require('./package.json');
const webpack = require('webpack');
const path = require("path");

module.exports = {
    webpack: function override(config, env) {
        const filename = `${appPackageJson.name}-${appPackageJson.version}`;

        const defaultOutput = config.output;
        config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }));
        config.devtool = false;
        config.plugins.push(new webpack.SourceMapDevToolPlugin({
            filename: 'sourcemaps/[file].map',
            publicPath: 'http://localhost:3000/',
            namespace: filename,
            moduleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]',
        }),);

        const entandoHRConfig = {
            filename: `static/js/${filename}.js`,
            libraryTarget: "umd",
            path: defaultOutput.path,
            publicPath: defaultOutput.publicPath,
            jsonpFunction: `webpackJsonp${filename}`,
        }
        config.output = entandoHRConfig;


        config.optimization = {}

        return config;
    },
    devServer: function (configFunction) {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            config.hot = false;
            config.injectClient = true;
            return config;
        };
    },


}

