const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules:[{ 
            test: /\.js$/,          
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
        }
        // ,{
        //     test: /\.(png|jp(e*)g|svg)$/,  
        //     use: [{
        //       //  loader: 'url-loader',
        //         options: { 
        //             limit: 8000, // Convert images < 8kb to base64 strings
        //             name: 'assents/[hash]-[name].[ext]'
        //         } 
        //     }]
        // }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}