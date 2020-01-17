/*
yarn init -y
yarn add webpack webpack-cli webpack-serve html-webpack-plugin -D
yarn add babel-loader@^8.0.0-beta @babel/core @babel/preset-env -D
echo '{ "presets": ["@babel/preset-env"] }' > .babelrc
"scripts": {
    "build": "webpack --progress",
    "watch": "webpack --watch --progress"
}
*/

const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/public",
        publicPath: "/public"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlPlugin()]
};