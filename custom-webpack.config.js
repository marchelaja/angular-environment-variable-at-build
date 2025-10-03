const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        API_URL: JSON.stringify(process.env.API_URL),
        APP_NAME: JSON.stringify(process.env.APP_NAME)
      }
    })
  ]
};
