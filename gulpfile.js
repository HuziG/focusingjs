const { src, dest, series } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');

function npmZipJs() {
  return src('local-npm/src/*.js')
    // gulp-uglify 插件并不改变文件名
    .pipe(uglify())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('public-npm/dist/'));
}

function npmZipCss() {
  return src('local-npm/src/*.css')
    // gulp-uglify 插件并不改变文件名
    .pipe(cssmin())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('public-npm/dist/'));
}

function cdnZipJs() {
  return src('cdn/*.js')
    // gulp-uglify 插件并不改变文件名
    .pipe(uglify())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('cdn/dist/'));
}

function cdnZipCss() {
  return src('cdn/*.css')
    // gulp-uglify 插件并不改变文件名
    .pipe(cssmin())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('cdn/dist/'));
}

exports.default = series(npmZipJs, npmZipCss, cdnZipJs, cdnZipCss);
