const appPackageJson = require('./package.json');
const webpack = require('webpack');

module.exports = {
    webpack: function override(config, env) {
        const isEnvDevelopment = env === 'development';
        const isEnvProduction = env === 'production';

        const filename = `${appPackageJson.name}-${appPackageJson.version}`;

        const defaultOutput = config.output;
        config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }));

        const entandoHRConfig = {
            filename: isEnvDevelopment ? `static/js/${filename}.js` : `static/js/${filename}.hash[hash:8].js`,
            libraryTarget: "umd",
            path: defaultOutput.path,
            devtoolNamespace: filename,
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

