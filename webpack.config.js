module.exports = {
  mode: 'development',
  entry: {
    main: './assets/src/index.ts',
    bootstrap: './assets/style/index-bootstrap.scss',
  },
  output: {
    path: '/var/www/public/build/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Inject css
          "style-loader",
          // css to commonjs
          "css-loader",
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer', {}]
                ]
              }
            }
          },
          // compile sass to css
          "sass-loader",
        ],
      },
    ],
  },
};
