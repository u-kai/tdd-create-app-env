const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:process.env.NPDE_ENV,
    entry: {
    bundle: './src/index.tsx'
    },
    output: {
    path: path.join(__dirname, 'dist'), 
    filename: '[name].js'  
    },
    resolve: {
    extensions:['.ts','.js',"tsx","jsx"]
    },
    devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    open: true 
    },
    module: {
    rules: [
        {
        test: /.(ts|tsx)$/,
        use:[
            {
                loader: 'ts-loader'
            },
        ],
        },
        {
            test:/.(css)$/,
            use:["style-loader","css-loader"],
        },
        {
        test:/.(png)$/,
        use:["file-loader"],
        },
    ],
    },
    plugins:[new HtmlWebpackPlugin({template:"./src/index.html"})],
}