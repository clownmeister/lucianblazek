const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [new ESLintPlugin({
    extensions: ['ts']
  })],
  entry: {
    main: './assets/src/index.ts',
    dos: './assets/src/Entrypoint/dos.ts',
    bootstrap: './assets/style/index-bootstrap.scss',
  },
  resolve:{
    extensions: ['.ts', '.js']
  },
  output: {
    path: '/var/www/public/build/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      },
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
