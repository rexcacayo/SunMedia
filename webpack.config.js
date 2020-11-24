const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              ["@babel/preset-env", {
                "targets": {
                  "safari": "10",
                  "ie":"10",
                  "chrome":"65"
                  
                }
              }]
            ],
            "plugins": ["@babel/plugin-transform-object-assign"]
          }
        }
      }
    ]
  },
  mode: 'development'
};