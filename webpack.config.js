const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ],
    devServer: {
        port: 7000,
        historyApiFallback: {
            index: "index.html"
        }
    }
};