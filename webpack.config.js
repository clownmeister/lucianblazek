const ESLintPlugin = require('eslint-webpack-plugin');
const path = require("path");

module.exports = {
  plugins: [new ESLintPlugin({
    extensions: ['ts']
  })],
  entry: {
    'public/build/dos': './application/Dos/assets/src/index.ts',
    'domains/dnd/build/dnd': './application/Dnd/assets/src/index.ts',
  },
  resolve:{
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, './'),
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
