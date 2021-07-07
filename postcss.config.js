let sorting = require('postcss-sorting');
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('stylelint'),
    require('postcss-flexbugs-fixes'),
    require('postcss-modules')({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }),
    require('postcss-autoreset')(),
    require('postcss-utilities')(),
    require('postcss-less'),
    sorting({
      order: ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],

      'properties-order': 'alphabetical',

      'unspecified-properties-position': 'bottom',
    }),
  ],
};
