const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        contentBase: './dist',
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    },

                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file-loader'
            },
            { test: /\.(woff|ttf)$/, loader: 'file-loader' },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/images/*', to: 'images/', toType: 'dir', flatten: true },
            {from: 'index.html', to: 'index.html'}
        ],{ debug: 'debug' })
    ]
};
