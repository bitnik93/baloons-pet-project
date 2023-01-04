import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import autoprefixer from 'autoprefixer';
import squoosh from 'gulp-libsquoosh';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import svgo from 'gulp-svgo';
import svgstore from 'gulp-svgstore';
import del from 'del';
import concat from 'gulp-concat';

// Clean

export const clean = () => {
  return del('build');
};

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    // .pipe(postcss([
    //   autoprefixer(),
    //   csso()
    // ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML
export const html = () => {
  return gulp.src('source/*.html')
  // .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build'))
}

// Scripts

const scripts = () => {
  return gulp.src('source/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
}

// Images
const images = () => {
  return gulp.src(['source/img/**/*.{jpg,png,svg}', '!source/img/favicon.svg'])
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'))
}

// WebP

const createWebp = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
    .pipe(squoosh({
      webp: {}
    }))
    .pipe(gulp.dest('build/img'))
}


// fonts
const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff,ttf}',
    'source/*.ico',
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'))
  done();
}

//SVG
export const svg = () =>
gulp.src('source/img/*.svg')
  .pipe(svgo())
  .pipe(gulp.dest('build/img'));

  const sprite = () => {
    return gulp.src('source/img/*.svg')
    .pipe(svgo())
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
  }

// Server

function server(done) {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

export const watcher = () => {
  gulp.watch('source/**/*.less', gulp.series(styles));
  gulp.watch('source/js/*.js', gulp.series(scripts));
  gulp.watch('source/*.html').on('change', browser.reload);
  gulp.watch('source/*.html', gulp.series(html));
  gulp.watch('source/img/*.{png,jpg,jpeg,gif,svg}', gulp.series(images));

}


export default gulp.series(
  clean, copy, svg, sprite, createWebp, scripts, html, styles, images, server, watcher
);
