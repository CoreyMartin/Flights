var webpack = require('webpack'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    entries, testEntries,
    scripts = `${__dirname}/web`,
    devBundles, prodBundles, bundles,
    isDev = parseInt(process.env.isDev);

if (isDev) { /* there's really no need to write dev bundle files to disk so we separate the configs 
    based on the isDev=1 argument to webpack. Instead we use hot-reloading where you reference the
    file in a template like so http://localhost:3000/name-of-bundle.js and updates are automatically
    served without writing files. */

    var devhost = 'http://localhost:3000';

    /* development config includes hot-reloading and source-maps.
       for developing in django templates start the webpack hot server
       by running `node webpack-hot-server.js` and include a script
       tag in the template with src="http://localhost:3000/[entryName].dev.js */
    devBundles = {
        devtool: 'source-map',
        entry: {
            app: [
                'react-hot-loader/patch',
                `webpack-dev-server/client?${devhost}`,
                'webpack/hot/only-dev-server',
                './index.web.js',
            ]
        },
        output: {
            path: `${scripts}/webpack`,
            filename: '[name].dev.js',
            publicPath: `${devhost}/`
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                /* we need exclude to make webpack run much faster. otherwise it traverses
                   the dependency tree and tries to recompile all files e.g. react and its
                   dependecies when those modules are included in our JS with `require` or `import`.
                   we only need to transpile our files. see this answer for more
                   info http://stackoverflow.com/a/37833072 */
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ['react-hot-loader/babel']
                }
            }]
        },
        devServer: {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true, // respond to 404s with index.html
            hot: true, // enable HMR on the server
        },
    }

    bundles = devBundles;

} else {

    prodBundles = {
        devtool: 'cheap-source-map',
        entry: {
            app: './index.web.js'
        },
        output: {
            path: `${scripts}/build`,
            filename: '[name].js'
        },
        plugins: [
            /* we set NODE_ENV to production because it removes a lot of code added by
               react hot loader from non-dev bundles. more info here https://goo.gl/AO5M9B */
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                output: {
                    comments: false
                },
                compressor: {
                    warnings: false
                }
            }),
            new CopyWebpackPlugin([
                {
                    context: 'app',
                    from: { glob: 'fonts/**' },
                    from: { glob: 'img/**' }
                }
            ])
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                /* we need exclude to make webpack run much faster. otherwise it traverses
                   the dependency tree and tries to recompile all files e.g. react and its
                   dependecies when those modules are included in our JS with `require` or `import`.
                   we only need to transpile our files. see this answer for more
                   info http://stackoverflow.com/a/37833072 */
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }]
        }
    }

    bundles = prodBundles;
}

module.exports = bundles;
