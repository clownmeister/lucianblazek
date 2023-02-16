module.exports = {
  mode: 'development',
  entry: {
    main: './assets/src/index.ts',
    dos: './assets/src/Entrypoint/dos.ts',
    bootstrap: './assets/style/index-bootstrap.scss',
  },
  output: {
    path: '/var/www/public/build/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
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
