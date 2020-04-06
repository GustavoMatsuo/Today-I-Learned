
module: {
    rules: [
        {
            test: /\.(eot|md|svg|ttf|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
        },
    ]
    loaders: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack','url-loader'],
        },
    ]
}