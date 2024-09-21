const webpack = require('webpack');

module.exports = {
  // other configurations...
  resolve: {
    fallback: {
      "path": false,
      // Add other Node.js core modules here if needed
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
