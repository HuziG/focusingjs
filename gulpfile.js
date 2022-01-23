const { src, dest, series } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');

function npmZipJs() {
  return src('local-npm/src/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('public-npm/dist/'));
}

function npmZipCss() {
  return src('local-npm/src/*.css')
    .pipe(cssmin())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('public-npm/dist/'));
}

function cdnZipJs() {
  return src('cdn/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('cdn/dist/'));
}

function cdnZipCss() {
  return src('cdn/*.css')
    .pipe(cssmin())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('cdn/dist/'));
}

exports.default = series(npmZipJs, npmZipCss, cdnZipJs, cdnZipCss);
