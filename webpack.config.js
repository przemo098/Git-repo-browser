var path = require('path');

var outPath = path.join(__dirname, './dist');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "dist/bundle.js",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "ag-grid-root": __dirname + "/node_modules/ag-grid"
    }
  },
  module: {

    loaders: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ]
      },
      // css 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // static assets 
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.png$/, use: 'url-loader?limit=10000' },
      { test: /\.jpg$/, use: 'file-loader' },
    ]
  },
  devServer: {
    // contentBase: "./dist",
    hot: true
  }
};

