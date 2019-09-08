const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const prod = process.argv.indexOf('-p') !== -1;
const path = require('path');

const webpackConfig = {
    entry: path.join(__dirname, '/index.ts'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        library: 'app',
        libraryTarget: 'commonjs2',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: prod ? "source-map" : "eval-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /(node_modules|Generated|dist|server)/
            },
        ]
    },
    target: 'node',
    externals: [nodeExternals()],
    devServer: {
        open: true,
        overlay: true,
        port: 9876,
        clientLogLevel: "warning",
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: './app',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
};