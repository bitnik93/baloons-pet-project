import gulp from 'gulp'

//Конфигурация
import path from '../config/path.js'
import app from '../config/app.js'

//Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupMediaCss from 'gulp-group-css-media-queries';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

const sass = gulpSass(dartSass)

// обработка CSS
const scss = () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'SCSS',
            message: error.message
        }))
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupMediaCss())
    .pipe(size({title: "main.css"}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "main.min.css"}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
}

export default scss;
