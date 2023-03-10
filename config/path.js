const pathSrc = "./source";
const pathBuild = "./build";

export default {
    root: pathBuild,
    html: {
        src: pathSrc + "/*.html",
        watch: pathSrc + "/**.html",
        dest: pathBuild
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathBuild + "/css"
    },
    scss: {
        src: pathSrc + "/sass/**/main.{scss,sass}",
        watch: pathSrc + "/sass/**/*.{scss,sass}",
        dest: pathBuild + "/css"
    },
    less: {
        src: pathSrc + "/less/**/style.less",
        watch: pathSrc + "/less/**/*.less",
        dest: pathBuild + "/css"
    },
    js: {
        src: pathSrc + "/js/**/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathBuild + "/js"
    },
    img: {
        src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: pathBuild + "/img"
    },
    fonts: {
        src: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}",
        watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}",
        dest: pathBuild + "/fonts"
    },
}
