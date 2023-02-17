import gulp from 'gulp'
import browserSync from 'browser-sync';

//Конфигурация
import path from './config/path.js'
import app from './config/app.js'

//Задачи

import clear from './task/clear.js'
import html from './task/html.js'
import less from './task/less.js'
import js from './task/js.js'
import img from './task/img.js'
import fonts from './task/fonts.js'
import scss from './task/scss.js'

//Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}


// Наблюдение
const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload)
    // gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
    gulp.watch(path.less.watch, less).on("all", browserSync.reload)
    gulp.watch(path.js.watch, js).on("all", browserSync.reload)
    gulp.watch(path.img.watch, img).on("all", browserSync.reload)
    gulp.watch(path.fonts.watch, fonts).on("all", browserSync.reload)
}

const build = gulp.series(
    clear,
    gulp.parallel(html,
        // scss,
        less,
        js, img, fonts
        ),
)

const dev = gulp.series(
    clear,
    build,
    gulp.parallel(watcher, server)
)


export {html};
export {watcher};
export {clear};
export {less};
// export {scss};
export {js};
export {img};
export {fonts};




//Сборка
export default app.isProd
    ? build
    : dev;
