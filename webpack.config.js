const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: {
                title: "Chat",
            },
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port: 3000,
    },
    module: {
        rules: [
            {test: /\.ts$/, use: "ts-loader"},
            {test: /\.handlebars$/, use: "handlebars-loader"},
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
            },
            {test: /\.(png|svg|jpg|jpeg)$/i, type: "asset/resource"},
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            childComponent: path.join(__dirname, "src/utils/handlebars/childComponent.js"),
            childComponentArray: path.join(
                __dirname,
                "src/utils/handlebars/childComponentArray.js"
            ),
            isEqual: path.join(__dirname, "src/utils/handlebars/isEqual.js"),
        },
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "/",
    },
};
