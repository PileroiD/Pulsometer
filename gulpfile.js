const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function startServer() {
    browserSync.init({
        server: 'src'
    })

    watch("src/js/*.js").on('change', browserSync.reload);
    watch("src/**.html").on('change', browserSync.reload);
    watch("src/scss/**/*.scss", series(scss)).on('change', browserSync.reload);
}

function scss() {
    return src('src/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}

exports.serve = series(scss, startServer);
