/**
 *  This file contains all of the user settings for the gulp build process
 */
module.exports = {
  srcHtml: ['src/**/*.html'],
  srcJs: ['src/**/*.module.js', 'src/**/*.js', '!src/**/*_test.js'],
  tmp: 'tmp/',
  tests: 'src/**/*_test.js',
  buildFolder: 'dist',
  buildCssFilename: 'ui-generics.css',
  buildJsFilename: 'ui-generics.js',
  banner: '/*!\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',
  closureStart: '(function(){\n',
  closureEnd: '\n})();'

};