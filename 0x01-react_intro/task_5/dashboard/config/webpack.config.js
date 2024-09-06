const path = require('path');

module.exports = {
    mode: 'development', // or 'production' depending on your needs
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // Name of the output file
        path: path.resolve(__dirname, '../dist'), // Output directory
    },
    devtool: 'inline-source-map', // For source maps
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // Inline images smaller than 8kb
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 8080, // Port for the dev server
        hot: true,
    },
};
