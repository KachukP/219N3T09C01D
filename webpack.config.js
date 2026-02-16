const path = require("node:path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ini = process.env.NODE_ENV == "development";
const LiveServer = require("live-server");

if(ini){
    LiveServer.start({
        root:"./",
        file:"index.html",
    });
};

module.exports = {
    watch: ini,
    entry: "./src/Initial.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx','.ts','.js'],
        plugins:[new TsconfigPathsPlugin(),],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/",
    },
};