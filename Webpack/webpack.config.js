const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/main.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[hash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["env", {
                                "targets": {
                                    "browsers": ["last 2 versions", "ie 11"]
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    }
};