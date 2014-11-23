'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var webpack = require('gulp-webpack');
var stylish = require('jshint-stylish');
var csslint = require('gulp-csslint');
var scsslint = require('gulp-scss-lint');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
require('jsx-loader');


var paths = {
    html: ['src/**/*.html'],
    scripts: ['src/js/*.js'],
    scriptInit: 'init.js',
    styles: ['src/sass/*.scss'],
    fonts: 'src/**/*.woff',
    images: ['src/images/**/*.jpg', 'src/images/**/*.gif']
};
// webpack
gulp.task('webpack', function() {
    del(['dist/**/*.js']);
    return gulp.src('src/js/' + paths.scriptInit).pipe(webpack({
        module : {
            preLoaders: [
                { test: /\.js$/, loader: 'jsx-loader?stripTypes' }
            ],
            loaders: [
                { test: /\.js$/, loader: 'jshint-loader' }
            ]
        },
        context: __dirname + '/src',
        devtool: '#source-map',
        output: {
            path: __dirname + '/dist/js',
            filename: 'bundle.js'
        }
    })).pipe(gulp.dest('dist/js'));
});
gulp.task('clean-dist', function() {
     del('dist');
});
gulp.task('jshint', function() {
     return gulp.src(paths.scripts).pipe(jshint()).pipe(jshint.reporter(stylish))/*.pipe(jshint.reporter('fail'))*/;
});
gulp.task('jshint-gulp', function() {
     return gulp.src('gulpfile.js').pipe(jshint()).pipe(jshint.reporter(stylish))/*.pipe(jshint.reporter('fail'))*/;
});
gulp.task('html', function() {
    del(['dist/**/*.html']);
    return gulp.src(paths.html).pipe(gulp.dest('dist/'));
});
gulp.task('images', function() {
    del(['dist/images']);
    return gulp.src(paths.images).pipe(gulp.dest('dist/images'));
});
gulp.task('fonts', function() {
    del(['dist/fonts']);
    return gulp.src(paths.fonts).pipe(gulp.dest('dist/fonts'));
});
gulp.task('sass', function() {
    del(['dist/css']);
    return gulp.src(paths.styles)
            .pipe(scsslint())
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(csslint())
            .pipe(csslint.reporter())
            .pipe(minifyCSS())
            .pipe(sourcemaps.write('../maps'))
            .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['webpack']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.fonts, ['fonts']);
    gulp.watch('gulpfile.js', ['jshint-gulp']);
});
gulp.task('build', ['jshint-gulp', 'webpack', 'sass', 'html', 'images', 'fonts']);
gulp.task('default', ['watch', 'build']);