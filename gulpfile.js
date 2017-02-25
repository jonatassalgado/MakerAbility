'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin')
var sass = require('gulp-sass');
var pump = require('pump');

gulp.task('compress', function(cb){
  gulp.start('compress-js', 'compile-sass', 'compress-css', 'compress-images');
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


gulp.task('compile-sass', function (cb) {
  pump([
    gulp.src(['public/scss/**/*.scss', 'public/scss/*.css']),
    sass({ includePaths : ['public/scss/', 'public/css/'] }).on('error', sass.logError),
    gulp.dest('public/css')
  ],
  cb
)
});

gulp.task('compress-css', ['compile-sass'], function (cb) {
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

gulp.task('compress-images', function(cb){
  pump([
    gulp.src('public/images/src/*'),
    imagemin(),
    gulp.dest('public/images/dist')
  ],
  cb
);
});

gulp.task('watch', function () {
  gulp.watch(['app/views/pages/*.ejs', 'public/scss/**/*.scss', 'public/scss/*.scss', 'public/images/src/*', 'public/js/**/*', 'public/js/*'], ['compress']);
});

gulp.task('watch-sass', function () {
  gulp.watch(['public/scss/**/*.scss', 'public/scss/*.scss'], ['compile-sass', 'compress-css']);
});
