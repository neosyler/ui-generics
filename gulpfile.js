'use strict';

var path = require('path'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  extend = require('extend'),
  karma = require('karma').server,
  karmaConfig = require('./karma.conf'),
  config = require('./build.conf.js'),
  plugins = require('gulp-load-plugins')();

var ciMode = false;

function errorHandler(title) {
  'use strict';

  return function (err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
}

gulp.task('clean', function () {
  return gulp
    .src(config.buildFolder, {read: false})
    .pipe(plugins.clean());
});

gulp.task('partials', function () {
  return gulp.src(config.srcHtml)
    .pipe(plugins.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe(plugins.angularTemplatecache('templateCacheHtml.js', {
      module: 'ui-generics',
      root: 'src'
    }))
    .pipe(gulp.dest(config.tmp));
});

gulp.task('styles', function () {
  var sassOptions = {
    loadPath: [],
    outputStyle: 'expanded',
    precision: 10
  };

  return gulp.src(['src/**/*.scss'])
    .pipe(plugins.concat(config.buildCssFilename))
    .pipe(plugins.sass(sassOptions)).on('error', errorHandler('Sass'))
    .pipe(plugins.autoprefixer()).on('error', errorHandler('Autoprefixer'))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.cssnano())
    .pipe(plugins.filesize())
    .pipe(plugins.rename({extname: '.min.css'}))
    .pipe(gulp.dest(config.buildFolder))
});

gulp.task('scripts', ['styles', 'partials'], function () {
  return gulp.src(config.tmp + '*.js')

  // jshint
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.if(ciMode, plugins.jshint.reporter('fail')))
    .pipe(plugins.addSrc(config.srcJs))

    // package
    .pipe(plugins.concat(config.buildJsFilename))
    .pipe(plugins.header(config.closureStart))
    .pipe(plugins.footer(config.closureEnd))
    .pipe(plugins.header(config.banner))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.filesize())

    // minify
    .pipe(plugins.uglify())
    .pipe(plugins.rename({extname: '.min.js'}))
    .pipe(gulp.dest(config.buildFolder))
    .pipe(plugins.filesize())
    .on('error', plugins.util.log);

});

gulp.task('test', function () {

  karmaConfig({
    set: function (testConfig) {

      extend(testConfig, {
        singleRun: ciMode,
        autoWatch: !ciMode,
        browsers: ['PhantomJS']
      });

      karma.start(testConfig, function (exitCode) {
        plugins.util.log('Karma has exited with ' + exitCode);
        process.exit(exitCode);
      });
    }
  });
});

gulp.task('watch', function () {
  return gulp.watch(config.srcJs, ['scripts']);
});

gulp.task('ci', function () {
  ciMode = true;
  return gulp.start(['clean', 'scripts', 'test']);
});

gulp.task('default', ['scripts']);