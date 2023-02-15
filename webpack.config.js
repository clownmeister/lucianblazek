module.exports = {
  mode: 'development',
  entry: {
    main: './assets/scripts/index.ts',
  },
  output: {
    path: '/var/www/public/build/',
    filename: '[name].bundle.js',
  },
};
