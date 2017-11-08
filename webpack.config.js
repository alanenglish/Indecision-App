const path = require('path');

// let it know where the entry point is
// where should it output the final bundle file

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
