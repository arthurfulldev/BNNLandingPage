let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let concatCss = require('gulp-concat-css');

let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./node_modules/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('libs/bootstrap'));
});

gulp.task('js', function () {
  return gulp.src('./node_modules/bootstrap/js/dist/**/*.js')
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('libs/bootstrap'));
});