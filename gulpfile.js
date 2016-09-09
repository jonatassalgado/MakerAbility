'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var pump = require('pump');

gulp.task('compress', function(cb){
  gulp.start('compress-js', 'compress-css');
})

gulp.task('compress-js', function (cb) {
  pump([
    gulp.src(['public/js/vendor/*.js', 'public/js/components/*.js', 'public/js/application.js']),
    concat('main.js'),
    uglify(),
    gulp.dest('public/js')
  ],
  cb
);
});

gulp.task('compress-css', function (cb) {
  pump([
    gulp.src(['public/css/vendor/*.css', 'public/css/components/*.css', 'public/css/application/*.css']),
    concat('main.css'),
    cssmin(),
    rename({suffix: '.min'}),
    gulp.dest('public/css')
  ],
  cb
);
});
