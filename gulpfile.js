let gulp = require('gulp');
let sass = require('gulp-sass');
let minifycss =require('gulp-minify-css');
let concatCss = require('gulp-concat-css');

let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./node_modules/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(concatCss("bundle.min.css"))
    .pipe(minifycss())
    .pipe(gulp.dest('libs/bootstrap'));
});

gulp.task('js', function () {
  return gulp.src('./node_modules/bootstrap/js/dist/**/*.js')
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('libs/bootstrap'));
});