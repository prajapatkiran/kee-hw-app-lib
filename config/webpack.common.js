const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ENV, IS_PRODUCTION, APP_VERSION, IS_DEV, dir } = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = function(options = {}) {
    console.log('>--> Webpack Common.js....');
    return {
        context: dir(),
        resolve: {
            extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
            modules: [
                'node_modules',
                dir('src')
            ]
        },
        performance: {
            hints: false
        },
        output: {
            path: dir('dist'),
            filename: '[name].js',
            sourceMapFilename: '[name].map',
            chunkFilename: '[id].chunk.js'
        },
        module: {
            exprContextCritical: false,
            rules: [{
                    test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg|gif)$/,
                    loader: 'url-loader',
                    query: {
                        limit: '100000'
                    }
                },
                {
                  test: /\.ts$/,
                  loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                  ],
                  exclude: [/\.(spec|e2e|d)\.ts$/, dir('node_modules')]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'postcss-loader?sourceMap']
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        // use: ['to-string-loader', 'css-loader', 'postcss-loader?sourceMap', 'sass-loader?sourceMap']
                        use: ['raw-loader', 'sass-loader']
                    })
                }
                // ,
                // {
                //     test: /\.css/,
                //     loaders: [
                //         ExtractTextPlugin.extract({
                //             fallbackLoader: "style-loader",
                //             loader: 'css-loader'
                //         })
                //     ]
                // },
                // {
                //     test: /\.scss$/,
                //     loaders: [
                //         ExtractTextPlugin.extract({
                //             fallbackLoader: 'style-loader',
                //             loader: 'css-loader'
                //         })
                //     ]
                // }
            ]
        },
        plugins: [

            new CheckerPlugin(),
            new ExtractTextPlugin({
                filename: '[name].css',
                allChunks: true
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({
                ENV,
                IS_PRODUCTION,
                APP_VERSION,
                IS_DEV,
                HMR: options.HMR
            }),
            new CopyWebpackPlugin([
                { from: 'assets', to: 'assets' }
            ]),
            new webpack.LoaderOptionsPlugin({
                options: {
                    context: dir(),
                    tslint: {
                        emitErrors: false,
                        failOnHint: false,
                        resourcePath: 'src'
                    },
                    postcss: function() {
                        return [autoprefixer];
                    }
                }
            })
        ]
    };

};
