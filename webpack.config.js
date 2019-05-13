const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pug = require("pug");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /index\.pug$/,
                use: [
                    {loader: "file-loader", options: {name: "index.html"}},
                    {loader: "pug-extract-loader", options: {locals: {}}},
                    {loader: "pug-loader", options: {pretty: true}}
                ]
            },
            {
                test: /\.pug$/,
                include: [path.resolve(__dirname, "src", "parts")],
                use: [
                    {
                        loader: "pug-loader", options: {
                            pretty: true, doctype: "html", filters: {escape: pug.runtime.escape}
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {loader: "file-loader", options: {name: "fonts/[name].[ext]"}}
            },
            {test: /\.js$/, use: {loader: "babel-loader"}, exclude: /node_modules/},
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
    ]
};