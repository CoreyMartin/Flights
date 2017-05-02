var webpack = require('webpack'),
    path = require('path'),
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
                './web/index',
            ]
        },
        output: {
            path: `${scripts}/webpack`,
            filename: '[name].dev.js',
            publicPath: `${devhost}/`
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                use: ['babel-loader'],
                /* we need exclude to make webpack run much faster. otherwise it traverses
                   the dependency tree and tries to recompile all files e.g. react and its
                   dependecies when those modules are included in our JS with `require` or `import`.
                   we only need to transpile our files. see this answer for more
                   info http://stackoverflow.com/a/37833072 */
                exclude: [/node_modules/],
                include: path.join(__dirname, 'web')
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
            app: './web/index'
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
            })
        ],
        module: {
            loaders: [{
                test: /\.js$/,
                use: ['babel-loader'],
                /* see explanation above for why we need exclude */
                exclude: [/node_modules/]
            }]
        }
    }

    bundles = prodBundles;
}

module.exports = bundles;
