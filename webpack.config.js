const { watchFile } = require("fs")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require ("path")


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },

            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            
        ]   
    },

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    }
}