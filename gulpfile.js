'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
        gulp.src(['public/js/vendor/*.js', 'public/js/components/*.js', 'public/js/application.js']),
        concat('main.js'),
        uglify(),
        gulp.dest('public/js')
    ],
    cb
  );
});
