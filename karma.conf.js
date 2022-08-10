module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: [ 'Firefox' ],
    plugins: [
        'karma-mocha',
        'karma-mocha-reporter',
        'karma-webpack',
        'karma-firefox-launcher',
    ],
    frameworks: [ 'mocha' ],
    files: ['index.jsx'],
    preprocessors: {
      'index.jsx': ['webpack']
    },
    reporters: [ 'mocha' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
            {
              test: /\.jsx$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            }
          ]
      }
    },
  });
};
