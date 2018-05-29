require('babel-polyfill');
var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'bundle.js'
    },
    debug: true,
    devtool: "source-map",
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
