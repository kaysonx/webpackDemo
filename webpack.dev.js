const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
    },
});