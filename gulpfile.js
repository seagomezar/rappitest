'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var Server = require('karma').Server;
var usemin = require('gulp-usemin');
var minifyCSS = require('gulp-cssnano');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('main', function() {
  gulp.src(['app/index.html'])
    .pipe(usemin({
      Stylescss: [minifyCSS({zindex: false}), 'concat'],
      Scriptsjs: [ngAnnotate(), uglify(), 'concat'],
      Vendorjs: [ngAnnotate(), uglify(), 'concat']
    }))
    .pipe(gulp.dest('dist'));
});