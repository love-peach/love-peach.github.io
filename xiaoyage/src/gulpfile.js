(function () {
    'use strict'
    var gulp = require('gulp'),
        less = require('gulp-less'),
        rename = require('gulp-rename'),
        path = require('path'),
        uglify = require('gulp-uglify'),
        minifyCSS = require('gulp-minify-css'),
        concat = require('gulp-concat'),
        autoprefix = require('gulp-autoprefixer'),
        replace = require('gulp-batch-replace'),
        del = require('del'),
        paths = {
            root: './',//当前路径
            source: {
                root: './',
                styles: './less/',
                scripts: './js/',
                fonts: './fonts/',
                img: './img/'
            },
            dist: {
                root: '../dist',
                styles: '../dist/css/',
                scripts: '../dist/js/',
                fonts: '../dist/fonts/',
                img: '../dist/img/'
            }
        };
    gulp.task('styles', function (cb) {
        var cssSrc = paths.source.styles + 'style.less';
        var cssDest = paths.dist.styles;

        gulp.src(cssSrc)
            .pipe(less({
                paths: [ path.join(__dirname, 'less', 'includes') ]
            }))
            .pipe(autoprefix())
            .pipe(gulp.dest(cssDest))
            .pipe(minifyCSS(
                {
                    advanced: false,
                    aggressiveMerging: false
                }))
            .pipe(rename(function (path) {
                path.basename = path.basename + '.min';
            }))
            .pipe(gulp.dest(cssDest))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });

    gulp.task('copy-css',function (cb) {
        var cssSrc = paths.source.styles + '*.css';
        var cssDest = paths.dist.styles;

        gulp.src(cssSrc)
            .pipe(gulp.dest(cssDest))
            .pipe(minifyCSS(
                {
                    advanced: false,
                    aggressiveMerging: false
                }))
            .pipe(rename(function (path) {
                path.basename = path.basename + '.min';
            }))
            .pipe(gulp.dest(cssDest))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });

    gulp.task('scripts', function (cb) {
        var jsSrc = paths.source.scripts + '*.js';
        var jsDest = paths.dist.scripts;

        gulp.src(jsSrc)
            .pipe(gulp.dest(jsDest))
            .pipe(uglify())
            .pipe(rename(function (path) {
                path.basename = path.basename + '.min';
            }))
            .pipe(gulp.dest(jsDest))
            .on('end', function () {
                cb();
            })
    });

    gulp.task('img', function (cb) {
        var imgSrc = paths.source.img + '/**';
        var imgDest = paths.dist.img;

        gulp.src(imgSrc)
            .pipe(gulp.dest(imgDest))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });
    gulp.task('fonts', function (cb) {
        var fontSrc = paths.source.fonts + '*.*';
        var fontDest = paths.dist.fonts;

        gulp.src(fontSrc)
            .pipe(gulp.dest(fontDest))
            .on('end', function () {//完成后的回调，继续执行其他任务？
                cb();
            });
    });
    gulp.task('watch', function () {
        gulp.watch(paths.source.scripts + '*.js', ['scripts']).on('change', function (event) {
            watcherLog(event);
        });
        gulp.watch(paths.source.styles + '*.*', ['styles']).on('change', function (event) {
            watcherLog(event);
        });
        gulp.watch(paths.source.styles + '*.*', ['copy-css']).on('change', function (event) {
            watcherLog(event);
        });
    });
    function watcherLog(event) {
        var filePath = event.path;
        var fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
        console.log('File ' + fileName + ' was ' + event.type + ', running tasks...');
    }

    //由于调用顺序问题，这个任务无法加到default中，需要手动处理
    gulp.task('clean', function (cb) {
        del([
            paths.dist.root + '/**/*'
        ], {force: true}, cb);
    });
    gulp.task('default', ['styles','copy-css', 'img', 'fonts', 'scripts']);
})();