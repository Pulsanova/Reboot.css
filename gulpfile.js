'use strict';

const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const del = require('del');
const resolveFrom = require('resolve-from');
const $ = require('gulp-load-plugins')();
const pkg = require('./package.json');

const BANNER = [
    '/*!',
    ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
    ' * Copyright (c) 2020-<%= year %> Pulsanova',
    ' * Licensed under <%= pkg.license %> license.',
    ' *',
    ' * Also include parts of others software:',
    ' * - normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css',
    ' * - Bootstrap v5.0.0-alpha1 | MIT License | github.com/twbs/bootstrap',
    ' */\n',
].join('\n');

$.sass.compiler = require('sass');

const sassImporter = (url, prev, done) => {
    if (url[0] !== '~') {
        return null;
    }

    url = resolveFrom(prev, url.substr(1));
    url = path.relative(prev, url);

    return { file: url };
};

const cssImporter = (url) => {
    if (url[0] !== '~') {
        return null;
    }
    return resolveFrom('./src', url.substr(1));
};

const clean = () => del(['./dist']);

const buildSass = () => {
    const sassOptions = {
        outputStyle: 'expanded',
        importer: sassImporter,
    };

    return gulp.src('./src/reboot.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions).on('error', $.sass.logError))
        .pipe($.cssimport({ matchPattern: '*.css', transform: cssImporter }))
        .pipe($.cleanCss({
            format: 'beautify',
            level: {
                1: {
                    removeWhitespace: false,
                    specialComments: false,
                },
                2: {
                    mergeIntoShorthands: false,
                    mergeNonAdjacentRules: true,
                }
            },
        }))
        .pipe($.header(BANNER, { pkg, year: new Date().getFullYear() }))
        .pipe($.sourcemaps.write('.', { addComment: false }))
        .pipe(gulp.dest('./dist'))
        .pipe($.cleanCss({
            level: 0,
            format: {
                breaks: { afterComment: true }
            },
        }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist'));
};

exports.default = gulp.series(clean, buildSass);
