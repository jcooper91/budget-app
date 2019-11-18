const path = require("path")

module.exports = {
    entry: ['babel-polyfill', './src/scripts/index.js', './src/scripts/expense.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: ['transform-object-rest-spread']
                }
            }, 
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader',],
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}
